<div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-16">
    {/* Left Section - Images */}
    <div className="shrink-0 w-full max-w-md lg:max-w-lg mx-auto">
      <img
        className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] object-cover object-center rounded-lg"
        src={selectedImage ? selectedImage : obj.thumbnail}
        alt=""
      />
      <div className="flex flex-wrap justify-center gap-2 mt-4">
        {obj.images.map((img, index) => (
          <img
            key={index}
            onClick={() => handleClick(img)}
            src={img}
            alt="thumbnail"
            className="w-20 h-20 object-cover rounded-lg cursor-pointer hover:scale-105 transition"
          />
        ))}
      </div>
    </div>

    {/* Right Section - Details */}
    <div className="mt-6 bg-black/30 w-full p-5 rounded-3xl sm:mt-8 lg:mt-0">
      <h1 className="text-xl sm:text-2xl font-semibold text-gray-100">
        {obj.title}
      </h1>

      <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:gap-4">
        <p className="text-2xl sm:text-3xl font-extrabold text-white">
          ${obj.price}
        </p>
        <div className="flex items-center gap-2 mt-2 sm:mt-0">
          {/* Stars here... (no change) */}
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-6 flex flex-col sm:flex-row sm:gap-4">
        <button
          onClick={() => dispatch(addtoWish(obj))}
          className="flex items-center justify-center py-2.5 px-5 text-sm font-medium text-white bg-transparent hover:bg-white/20 border border-gray-400 rounded-lg"
        >
          ❤️ Add to favorites
        </button>
        <button
          onClick={() => dispatch(AddtoCart(obj))}
          className="mt-3 sm:mt-0 flex items-center justify-center py-2.5 px-5 text-sm font-medium text-white bg-gray-700 hover:bg-gray-800 border border-gray-400 rounded-lg"
        >
          🛒 Add to cart
        </button>
      </div>

      {/* Accordions */}
      <div className="mt-6 space-y-4">
        {/* Summary Accordion */}
        <Accordion sx={{ backgroundColor: "rgba(0,0,0,0.4)", color: "white" }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography component="span">Summary</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <p><span className="text-blue-200">Description:</span> {obj.description}</p>
            <p><span className="text-blue-200">Rating:</span> {obj.rating}</p>
            <p><span className="text-blue-200">Return Policy:</span> {obj.returnPolicy}</p>
            <p><span className="text-blue-200">Warranty:</span> {obj.returnPolicy}</p>
          </AccordionDetails>
        </Accordion>

        {/* Rating Accordion */}
        <Accordion sx={{ backgroundColor: "rgba(0,0,0,0.4)", color: "white" }}>
          <AccordionSummary expandIcon={<ArrowDownwardIcon />}>
            <Typography className="text-amber-100 text-lg sm:text-2xl">
              Rating
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            {/* Reviewer section remains same with layout tweaks */}
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  </div>

  {/* Related Products */}
  <div className="p-2 text-[#f3f3f3] mt-8">
    <h1 className="text-center text-2xl font-semibold mb-4">Related Products</h1>
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {filteredArr.map((ele, i) => (
        <div key={i} className="bg-black/40 rounded-xl p-3">
          {/* Your related product card here */}
        </div>
      ))}
    </div>
  </div>
</div>
