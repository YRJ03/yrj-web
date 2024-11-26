import './css_file/Header.css'

const Header = () => {
  return (
    <header className="header">
      <a href="https://github.com/YRJ03" target="_blank" rel="noopener noreferrer" className="header-link">
        <h1 className="user-name">Yuvraj Yadav</h1>
        <div className='user-dec'>
          <img src="./images/my_pic.jpg" alt="my pic" className='my-pic'/>
        </div>
        <div className="user-dec">
          <span className="line">Fronted Developer (React)</span>
        </div>
      </a>
    </header>
  );
};

export default Header;

  