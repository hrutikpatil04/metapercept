

function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between mx-3">
        <a class="navbar-brand" href="#">
          Title
        </a>
        <div className="form-inline" class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto align-items-center">
            <li class="nav-item">
              <a class="nav-link" href="#">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Blog
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Contact
              </a>
            </li>

            <li class="nav-item">
              <button class="btn btn-outline-primary btn-sm" href="#">
                Button
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
