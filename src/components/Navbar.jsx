
const Navbar = () => {
  return (
    <>
      <div data-aos="fade-down" data-aos-duration="1000"
      className="fixed z-500 w-[100%] flex justify-around items-center bg-gray-800 p-4 ">
        <div className="left">Portfolio</div>
        <div className="right">
          <a href="#home" className="nav_items ">Home</a>
         
          <a href="#experience" className="nav_items">Experience</a>
          <a href="#skills" className="nav_items">Skills</a>
          <a href="#project" className="nav_items">Project</a>
          <a href="#contact" className="nav_items">Contact</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
