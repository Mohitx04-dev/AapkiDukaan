import React from 'react'

function SearchProduct() {
  return (
    <div className="h-screen flex items-center justify-center">
    <div
      tabIndex={1}
    //   onBlur={resetSearchComplete}
    //   onKeyDown={handleKeyDown}
      className="relative"
    >
      <input
        // value={defaultValue}
        // onChange={handleChange}
        type="text"
        className="w-[600px] px-5 py-3 text-lg rounded-full border-2 border-gray-500 focus:border-gray-700 outline-none transition"
        placeholder="Search your query..."
      />

      {/* Search Results Container */}
      {(
        <div className="absolute mt-1 w-full p-2 bg-white shadow-lg rounded-bl rounded-br max-h-56 overflow-y-auto">
          {/* {results.map((item, index) => {
            return (
              <div
                key={index}
                onMouseDown={() => handleSelection(index)}
                ref={index === focusedIndex ? resultContainer : null}
                style={{
                  backgroundColor:
                    index === focusedIndex ? "rgba(0,0,0,0.1)" : "",
                }}
                className="cursor-pointer hover:bg-black hover:bg-opacity-10 p-2"
              >
                {renderItem(item)}
              </div>
            );
          })} */}
        </div>
      )}
    </div>
  </div>
  )
}

export default SearchProduct