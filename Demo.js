import { useState } from "react";

const content = [
  {
    summary: "React is a library for building UIs",
    details:
      "Dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    summary: "State management is like giving state a home",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    summary: "We can think of props as the component API",
    details:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

export default function App() {
  return (
    <>
      <ToTabs content={content} />
    </>
  );
}

function ToTabs({ content }) {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      <div>
        <Tab num={0} activeTab={activeTab} onClick={setActiveTab} />
        <Tab num={1} activeTab={activeTab} onClick={setActiveTab} />
        <Tab num={2} activeTab={activeTab} onClick={setActiveTab} />
        <Tab num={3} activeTab={activeTab} onClick={setActiveTab} />
      </div>

      <div>
        {activeTab <= 2 ? (
          <TabContent item={content.at(activeTab)} />
        ) : (
          <DifferentContent />
        )}
      </div>
    </>
  );
}

function Tab({ num, activeTab, onClick }) {
  return (
    <>
      <button onClick={() => onClick(num)}>Tab {num + 1}</button>
    </>
  );
}

function TabContent({ item }) {
  return (
    <>
      <h3>{item.summary}</h3>
      <p>{item.details}</p>
    </>
  );
}

function DifferentContent() {
  return <h4>I'm a DIFFERENT tab, so I reset state 💣💥</h4>;
}
