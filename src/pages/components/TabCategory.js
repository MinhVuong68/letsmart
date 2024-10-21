import { Select } from "antd"
import { useEffect, useState } from "react"

const TabCategory = (props) => {
    const category = props.data
    const getProductCategoryInfo = props.getProductCategoryInfo

    const [tabsCategory, setTabsCategory] = useState([])
    const [tabCategorySelected, setTabCategorySelected] = useState({})

    const [subTabsCategory, setSubTabsCategory] = useState([])
    const [subTabSelected, setSubTabSelected] = useState('')

    useEffect(() => {
        if (category.children?.length > 0) {
            setTabsCategory(category.children)
            setTabCategorySelected(category.children[0].id)
        } else {
            setTabsCategory([])
            setTabCategorySelected(null)
        }
    }, [category.id])

    useEffect(() => {
        const subTab = category.children?.find((item) => item.id === tabCategorySelected)
        if (subTab?.children.length > 0) {
            setSubTabSelected(subTab.children[0]?.id)
            setSubTabsCategory(subTab)
        } else {
            if(subTab?.id) {
                getProductCategoryInfo(subTab?.id)
            }
            setSubTabSelected('')
            setSubTabsCategory([])
        }
        
    }, [tabCategorySelected])

    useEffect(() => {
        if(subTabSelected) {
            getProductCategoryInfo(subTabSelected)
        }
    },[subTabSelected])

    return (
        <div className="tab-category">
            <div className="container">
                <div className='d-flex align-items-center mt-3' style={{ borderBottom: '1px solid #ccc' }}>
                    <div className="d-flex py-2">
                       {
                        tabsCategory?.length > 0 && (

                        <Select
                            defaultValue={tabCategorySelected}
                            value={tabCategorySelected}
                            onChange={(value) => {
                                setTabCategorySelected(value)
                            }}
                            style={{ minWidth: 170 }}
                        >
                            {tabsCategory?.map((item, index) => (
                                <Select.Option value={item.id} key={index}>{item.name}</Select.Option>
                            ))}
                        </Select>
                        )
                       }

                    </div>
                    <div className='d-flex ms-4 subtab-category' style={{ margin: '0 -10px' }}>
                        {Array.isArray(subTabsCategory?.children) && subTabsCategory?.children?.map((tab, index) => (
                            <div
                                className={`text-center py-2 tab ${subTabSelected == tab.id ? 'tab-focus' : ''}`}
                                style={{ cursor: 'pointer' }}
                                onClick={() => setSubTabSelected(tab.id)}
                            >
                                <span className='text-center text--subtab-category'>{tab.name}</span>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </div>

    )
}

export default TabCategory