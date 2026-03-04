import "./Banner.css";
function Banner() {
  return (
    <section className="banner-section grid grid-cols-1 md:grid-cols-2 gap-5 max-w-10/12 mx-auto my-16">
      <div className="in-progress-card h-50 lg:h-72 flex justify-center items-center rounded-xl">
        <div className="text-center">
          <h2 className="text-3xl mb-3">In-Progress</h2>
          <p className="font-bold text-7xl">0</p>
        </div>
      </div>

      <div className="resolved-card h-50 lg:h-72 flex justify-center items-center rounded-xl">
        <div className="text-center">
          <h2 className="text-3xl mb-3">Resolved</h2>
          <p className="font-bold text-7xl">0</p>
        </div>
      </div>
    </section>
  );
}

export default Banner;
