// ContentManagement.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addEditorAction, addContent, updateContent } from '../redux/actions';


const ContentManagement = () => {
  const user = useSelector((state) => state.user);
  const contentList = useSelector((state) => state.content);
  const dispatch = useDispatch();
  const [contentInput, setContentInput] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleEditorAction = () => {
    if (contentInput.trim() !== '') {
      if (selectedIndex !== null) {
        dispatch(updateContent(selectedIndex, contentInput));
        dispatch(addEditorAction(`Editor ${user.username} updated content.`));
      } else {
        dispatch(addContent(contentInput));
        dispatch(addEditorAction(`Editor ${user.username} added ${contentInput}.`));
      }
      setContentInput('');
      setSelectedIndex(null);
    }
  };

  const handleEditContent = (index) => {
    setContentInput(contentList[index]);
    setSelectedIndex(index);
  };

  return (
    <div className="content-management-container">
      <header>
        <h2>{user.username}'s Content Management</h2>
        <p>Role: {user.role}</p>
      </header>
      <main>
        <section>
          <h3>Your Content Management Space</h3>
          <form onSubmit={(e) => { e.preventDefault(); handleEditorAction(); }}>
            <label>
              Add/Edit Content:
              <input
                type="text"
                value={contentInput}
                onChange={(e) => setContentInput(e.target.value)}
              />
            </label>
            <button type="submit">
              {selectedIndex !== null ? 'Update Content' : 'Add Content'}
            </button>
          </form>
          <ul>
            {contentList.map((item, index) => (
              <li key={index}>
                {item}{' '}
                <button onClick={() => handleEditContent(index)}>Edit</button>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default ContentManagement;
