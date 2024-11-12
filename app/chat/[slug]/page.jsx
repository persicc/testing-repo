import { useRouter } from "next/router";
import React, { useEffect } from "react";

function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { userId } = router.pathname;

  console.log(userId);

  useEffect(() => {
    const getData = async () => {
      if (!userId) return;

      if (!data) {
        setLoading(true);
      }

      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        );
        const data = respose.json;
        setMessages(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
    setLoading(false);
  }, [userId]);

  {
    loading && <div>Loading...</div>;
  }

  return (
    <div>
      {messages.map((message) => (
        <div key={message.id}>
          <span>{message.sender}</span>
          <p>{message.text}</p>
        </div>
      ))}
    </div>
  );
}

export default ChatPage;
