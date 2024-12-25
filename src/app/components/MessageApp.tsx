
function MessageApp() {
    const [messages, setMessages] = useState([]);
    const [selectedConversation, setSelectedConversation] = useState(null);
    const [selectedUser, setSelectedUser] = useState(null); // New state for selected user
  
    useEffect(() => {
      // Fetch messages (replace with your actual data fetching logic)
      const fetchMessages = async () => {
        const response = await fetch('/api/messages'); // Or your dummy JSON data
        const data = await response.json();
        setMessages(data);
      };
      fetchMessages();
    }, []);
  
    const handleConversationSelect = (conversation) => {
      setSelectedConversation(conversation);
      setSelectedUser(null); // Reset selected user when a conversation is selected
    };
  
    const handleUserSelect = (user) => {
      setSelectedUser(user);
      setSelectedConversation(null); // Reset selected conversation when a user is selected
    };
  
    // Filter messages based on selected conversation or user
    const displayedMessages = messages.filter((message) => {
      if (selectedConversation) {
        return (
          message.sender.id === selectedConversation.sender.id ||
          message.recipient.id === selectedConversation.sender.id
        );
      } else if (selectedUser) {
        return (
          message.sender.id === selectedUser.id ||
          message.recipient.id === selectedUser.id
        );
      }
      return false; // No conversation or user selected
    });
  
    return (
      <div className="message-app">
        <h2>Message App</h2>
        {/* <Sidebar
          conversations={messages}
          onSelectConversation={handleConversationSelect}
          onSelectUser={handleUserSelect} 
        />
        <div className="message-area">
          <MessageList messages={displayedMessages} />
          <MessageInput />
        </div> */}
      </div>
    );
  }
  
  export default MessageApp;