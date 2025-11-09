import { useState } from "react";
import "./App.css";
import { Modal, Banner } from "./components";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleApplyClick = () => {
    setIsLoading(true);
    // Simulate an async operation
    setTimeout(() => {
      setIsLoading(false);
      setIsModalOpen(false);
    }, 2000);
  };

  return (
    <>
      <h1>Finom test task </h1>
      <a
        href="https://t.eu.lever-analytics.com/email-link?dest=https%3A%2F%2Fwww.figma.com%2Fdesign%2FUgcpwc0BaIBTmtZzWvRAvn%2FMarkup-banking-test%3Fnode-id%3D1871-3078&eid=a1227e68-1b85-45b3-b150-1a5b630704c5&idx=0&token=w-1jgpq9850vQdFBLnCv0JMdoOs"
        target="_blank"
      >
        Figma design and description
      </a>
      <div className="card">
        <h3>Technical note:</h3>
        <p>
          It is not pixel perfect since dev access has not been provided and I
          can't read the exact values from figma. Only presentation mode is
          available. I can't get exact css from it and guessed some values.
        </p>
        <p>
          As well as dev time is limited. But it is possible to improve it given
          access.
        </p>
        <p>Thanks!</p>
        <br />
        <h4>Click on the button below to open the modal:</h4>
        <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
      </div>

      <p className="author">Author: Zakharov Andrei</p>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Get the Business Funding You Need"
      >
        <Banner onApplyClick={handleApplyClick} isLoading={isLoading} />
      </Modal>
    </>
  );
}

export default App;
