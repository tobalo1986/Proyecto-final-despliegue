import { useState } from "react";
import Avatar from "../components/Avatar";
import "../index.css";

export default function Chat() {
    const [messages, setMessages] = useState([]);
    const [emotion, setEmotion] = useState("neutral");
    const [text, setText] = useState("");

    const sendMessage = async (e) => {
        e.preventDefault();
        if (!text.trim()) return;

        // Añade mensaje del usuario
        setMessages((prev) => [...prev, { sender: "user", text }]);
        const userMsg = text;
        setText("");

        setEmotion("thinking");

        try {
            const res = await fetch("http://localhost:3000/api/sensei", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: userMsg })
            });

            const data = await res.json();
            console.log("Backend:", data);

            // Añade mensaje del sensei
            setMessages((prev) => [
                ...prev,
                { sender: "sensei", text: data.text || "Error al recibir respuesta." }
            ]);

            setEmotion(data.emotion || "neutral");

        } catch (err) {
            console.error(err);
            setMessages((prev) => [
                ...prev,
                { sender: "sensei", text: "Error en el dojo." }
            ]);
            setEmotion("neutral");
        }
    };

    return (
        <div className="chat-page">

            <h1 className="title">Sensei IA</h1>

            <div className="chat-layout">

                <Avatar emotion={emotion} />

                <div className="chat-container">

                    <div className="chat-log">
                        {messages.map((msg, i) => (
                            <div key={i} className={`msg ${msg.sender}`}>
                                {msg.text}
                            </div>
                        ))}
                    </div>

                    <form onSubmit={sendMessage} className="chat-form">
                        <input
                            type="text"
                            placeholder="Háblale a la sensei..."
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        />
                        <button>Enviar</button>
                    </form>

                </div>

            </div>
        </div>
    );
}
