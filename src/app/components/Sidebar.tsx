
function Sidebar({ conversations, onSelectConversation, onSelectUser }) {
    // Get unique users from conversations
    const users = Array.from(
      new Set(conversations.flatMap((msg) => [msg.sender, msg.recipient]))
    );
  
    return (
      <div className="sidebar">
        <div className="conversations">
          <h3>Conversations</h3>
          <ul>
            {conversations.map((conversation) => (
              <li
                key={conversation.id}
                onClick={() => onSelectConversation(conversation)}
              >
                {conversation.sender.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="users">
          <h3>Users</h3>
          <ul>
            {users.map((user) => (
              <li key={user.id} onClick={() => onSelectUser(user)}>
                {user.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
  
  export default Sidebar;