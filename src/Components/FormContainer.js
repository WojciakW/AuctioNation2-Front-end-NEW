import FormInput from "./FormInput";


const FormContainer = () => {
  return (
    <div className="center-container">
      <div className="form-container">
        <div className="header-container">
          <div className="logo-container">
            <h1><span className="logo-auctio">Auctio</span>Nation<span className="logo-version"> 2.0</span></h1>
            <h3>World of Warcraft Classic&trade;<span className="logo-info"> Auction House statistics</span> </h3>
            <h4>Last database update: 04.02.2022 7:32PM</h4>
          </div>
          <FormInput />
        </div>
        
      </div>
    </div>
  )
};

export default FormContainer;