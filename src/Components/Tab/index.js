import './index.css'

const Tab = props => {
  const {eachTab, activeTabId, onChangeTab} = props
  const {tabId} = eachTab
  const tabColor = eachTab.tabId === activeTabId ? 'active-tab' : ''
  const tabLine = eachTab.tabId === activeTabId ? 'active-line' : ''

  const onClickedTab = () => {
    onChangeTab(tabId)
  }
  return (
    <li className="tab-container">
      <button onClick={onClickedTab} className="tab-btn" type="button">
        <p className={`tab-name ${tabColor}`}>{eachTab.displayText}</p>
      </button>
      <hr className={`line ${tabLine}`} />
    </li>
  )
}
export default Tab
