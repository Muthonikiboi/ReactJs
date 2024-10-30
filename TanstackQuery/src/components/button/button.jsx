import PropTypes from 'prop-types';

const Button = ({ name }) => {
  return (
    <button className="w-48 h-12 bg-indigo-500 rounded-2xl text-2xl font-bold">{name}</button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Button;
   

// in app.jsx you will write

// import Button from "./components/button/button";

// export default function App() {
//   return (
//     <div className="p-0 m-0 h-dvh w-full box-border bg-slate-200">
//       <Button  name={"SignUp"}/>
//     </div>
//   )
// }
