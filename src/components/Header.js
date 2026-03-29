import Form from "./Form";
import Navigation from "./Navigation";

function Header({handleSubmit}) {
  return (
    <header>
      <h1>Photo Gallery</h1>
      <Form />
      <Navigation />
    </header>
  );
}

export default Header;
