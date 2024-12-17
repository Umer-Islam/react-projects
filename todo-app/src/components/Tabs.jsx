export default function Tabs() {
  const tabs = ["tab1", "tab2", "tab3"];
  return (
    <>
      <nav className="tab-container">
        {tabs.map((tab, tabIndex) => {
          return (
            <button className="tab-button" key={tabIndex}>
              <h4>{tab} <span>(0)</span></h4>
            </button>
          );
        })}
      </nav>
    </>
  );
}
