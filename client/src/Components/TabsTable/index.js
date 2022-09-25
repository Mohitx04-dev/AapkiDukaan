import React from 'react'
import { Tab } from '@headlessui/react'
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
function TabsTable(props) {
  
    
      return (
        <div className="w-full max-w-md px-2 py-16 sm:px-0">
          <Tab.Group>
            <Tab.List className="flex p-1 space-x-1 bg-blue-900/20 rounded-xl">
              {Object.keys(props.data).map((category) => (
                <Tab
                  key={category}
                  className={({ selected }) =>
                    classNames(
                      'w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg',
                      'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60',
                      selected
                        ? 'bg-white shadow'
                        : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                    )
                  }
                >
                  {category}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="mt-2">
              {Object.values(props.data).map((posts, idx) => (
                <Tab.Panel
                  key={idx}
                  className={classNames(
                    'bg-white rounded-xl p-3',
                    'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60'
                  )}
                >
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
    )
}

export default TabsTable
