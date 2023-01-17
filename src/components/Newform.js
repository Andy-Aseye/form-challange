import { useEffect, useState } from 'react';
import { CSVLink} from 'react-csv';

import './style.css';
function Form() {

// This fetches data from the country REST api that will be mapped in the country select input

    useEffect(() => {
        fetch("https://restcountries.com/v2/all")
        .then((response) => response.json())
        .then((data) => {setCountries(data)})
    }, []);


    const [countries, setCountries] = useState([]);

    // Data from the form is entirely stored in the formData Object using useState 

    const [formData, setFormData] = useState({
        Title: '',
        Firstname: '',
        Surname: '',
        Othernames: '',
        gender: '',
        Country: '',
        Region: '',
        dateOfBirth: '',
        Address: '',
        image: [],
        employed: '',
        job: '',
        maritalStatus: '',
        disability: '',
        schoolAttended: '',
        document: [],

    })

// This function handles data entry and primarily selection for the select input forms

    const onSelectHandler = (e) => {
        setFormData(() => ({
            ...formData,
            [e.target.name]: e.target.value
        }))
    }

// This function handles data entry and primarily text changes 

    const onChangeHandler = (e) => {
        setFormData(() => ({
            ...formData,
            [e.target.name]: e.target.value
        }))
        
    }

    // This function handles form data entry in the input image form control

    const onImageChange = (e) => {
        setFormData(() => (
            {
                ...formData,
                [e.target.name]: [...e.target.files]
            }
        ))
    }

     // This function handles form data entry in the input file form control
    const onFileChange = (e) => {
        setFormData(() => (
            {
                ...formData,
                [e.target.name]: [...e.target.files]
            }
        ))
    }


const arrData = Object.entries(formData);
      
    // These functions target the school form inputs for the school form, this maps and updates the form state after the submit button is clicked 

    const [schoolValues, setschoolValues] = useState([{ schoolname: "", startdate : "", enddate: ""}])

    let handleChange = (i, e) => {
        let newFormValues = [...schoolValues];
        newFormValues[i][e.target.name] = e.target.value;
        setschoolValues(newFormValues);
      }



    let addFormFields = () => {
        setschoolValues([...schoolValues, {schoolname: "", startdate: "", enddate: "" }])
      }
    
    let removeFormFields = (i) => {
        let newFormValues = [...schoolValues];
        newFormValues.splice(i, 1);
        setschoolValues(newFormValues)
    }


    let handleSubmit = (e) => {
        e.preventDefault();

    //    console.log(schoolValues);
       
    setFormData({
        ...formData,
        schoolAttended: schoolValues,
    })

    }

//     const current = new Date();
//   const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

    // This is the CSV file header for the state form 

    const headers = [
        {label: 'Title', key: 'Title'},
        {label: 'First Name', key: 'Firstname'},
        {label: 'Sur Name', key: 'Surname'},
        {label: 'Other Name', key: 'Othernames'},
        {label: 'Gender', key: 'gender'},
        {label: 'Date of Birth', key: 'dateofBirth'},
        {label: 'Address', key: 'Address'},
        {label: 'Image', key: 'image'},
        {label: 'Employed', key: 'employed'},
        {label: 'Job', key: 'job'},
        {label: 'Marital Status', key: 'maritalStatus'},
        {label: 'Disability', key: 'disability'},
        {label: 'School Attended', key: 'schoolAttended'},
        {label: 'Document', key: 'document'},
    ];

const csvLink = {
    headers: headers,
    filename: formData.Firstname+ ' on ' + new Date(),
    data: arrData,
}

// These functions validate the form, primarily targeting the firstname and surname form inputs

const firstname = document.getElementById('firstname');
const surname = document.getElementById('surname');


const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};


const validateInputs = () => {
    const firstnameValue = formData.Firstname.trim();
    const surnameValue = formData.Surname.trim();
    
    if(firstnameValue === '') {
        setError(firstname, 'First name is required');
    }  else if (firstnameValue.length < 3 ) {
        setError(firstname, 'Firstname must be at least 3 characters') }
  
  else {
        setSuccess(firstname);
    }

    if(surnameValue === '') {
        setError(surname, 'Surname is required');
    } else if (surnameValue.length < 3 ) {
        setError(surname, 'Surname must be at least 3 characters'); }
        else {
        setSuccess(surname);
    }

};




return (

<div>
<form>
    <div className="header-div">
    <h1 className='header-name'>Data Form</h1>
    </div>
   
<div className="form-group Title">
    <label htmlFor="title" className="form-label">Title:</label>
        <select name="Title" onClick={onSelectHandler}>
            <option value="Mr.">Mr.</option>
            <option value="Mrs.">Mrs.</option>
        </select>
    </div>
    {/* <div className="first-set"> */}
    <div className="form-group Surname">
    <label>
        Surname:</label>
        <input type="text" 
        name="Surname" placeholder="Surname" className="input-text"
       onChange= {onChangeHandler} id="surname"/>
     <div class="error"></div>
    </div>
    <div className="form-group Firstname" >
    <label>
        Firstname:</label>
        <input type="text" placeholder="Firstname" 
        name= "Firstname" className="input-text"
       onChange= {onChangeHandler} id="firstname"/>
     <div class="error"></div>
    </div>
    <div className="form-group Other-names">
    <label>
        Other names: </label>
        <input type="text" name="Othernames" className="input-text" onChange= {onChangeHandler} placeholder="Othernames" id="othernames"/>
        <div class="error"></div>
    </div>
    
    
    <div className="Gender form-group">
    <label htmlFor="gender" className="form-label"> Gender: </label>
    <select name="gender" onClick={onSelectHandler}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
    </select>
    </div>

    {/* <div className="first-set"> */}
    <div className="form-group Region">
    <label>
        Region:</label>
        <input type="text" name="Region" className="input-text" placeholder="Region" onChange={onChangeHandler}/>
    
    {/* value={region} */}
    </div>
    <div className="form-group Country">
    <label>
        Country: </label>
        <select name="country" onChange={onSelectHandler}>
            {
                countries.map((country) => <option value={country.name}>{country.name}</option>)
            
            }
        </select>
    {/* value={country} */}
    </div>
    <div className="form-group DOB">
    <label>
        Date of Birth:</label>
        <input type="text" className="input-text" name="dateOfBirth" placeholder="dd/mm/yyyy"  onChange={onChangeHandler}/>
    
    {/* value={dob} */}
    </div>
    {/* <div className="first-set"> */}
    <div className="form-group Address">
    <label>  
        Address:</label>
        <input type="text" className="input-text" name="Address" placeholder="Address" onChange={onChangeHandler}/>
  
    {/* value={address} */}
    </div>
    <div className="form-group Image">
    <label>
        Image:
        <input type="file" multiple accept="image/*" onChange={onImageChange} name="image"/>
    </label>
    </div>
    <div className="form-group Marital Status">
    <label htmlFor="maritalStatus" className="form-label marital-label">Marital Status: </label>
        <select name="maritalStatus" onClick={onSelectHandler}>
            <option value="married">Married</option>
            <option value="single">Single</option>
        </select>
    </div>

    <div className="form-group Occupation">
    <label htmlFor="occupation" className="form-label">Are you employed? </label>
    <select name="employed" onClick={onSelectHandler}>
        <option value="yes">Yes</option>
        <option value="no">No</option>
    </select>
    </div>
    {formData.employed ==="yes" ?  <div className="form-group">
    <label htmlFor="no">Job:</label>
    <select name="job" onChange={onChangeHandler}>
            <option value="doctor">Doctor</option>
            <option value="lawyer">Lawyer</option>
            <option value="teacher">Teacher</option>
            <option value="software-engineer">Software-Engineer</option>
            <option value="other">Other</option>
    </select>
     </div> : null}
     {formData.job ==="other" ?  <div className="form-group">
    <label> Job Other:</label>
        <input type="text" placeholder="Please specify" 
        name= "jobOther" className="input-text"
       onChange= {onChangeHandler} id="jobOther"/>
     </div> : null}
   
    <div className="form-group Disability">
    <label htmlFor="Disability" className="form-label">Are you disabled? </label>
        <select name="disability" onChange={onSelectHandler}>
            <option value="No">No</option>
            <option value="Yes">Yes</option>
        </select>
    </div>
    <div className="form-group School-attended">
    <label>
        School attended: </label>
        <div className="school-d">
        {schoolValues.map((element, index) => (
            <div className="form-inline-row" key={index}>
                <div className="form-g-s">
                <label>School Name</label>
              <input type="text" className="inline-input col-3" placeholder="eg. Achimota"  name="schoolname" value={element.schoolname || ""} onChange={e => handleChange(index, e)} />
                </div>

              <div className="form-g-s">
              <label>Start Date</label>
              <input type="text" name="startdate" className="inline-input col-3" placeholder="eg. 05/11/2018" value={element.startdate || ""} onChange={e => handleChange(index, e)} />
              </div>
              <div className="form-g-s">
              <label>End Date</label>
              <input type="text" name="enddate" className="inline-input col-3" placeholder="eg. 18/08/2022" value={element.enddate || ""} onChange={e => handleChange(index, e)} />
              </div>
              
              {
                index ? 
                  <button type="button"  className="button remove" onClick={() => removeFormFields(index)}>Remove</button> 
                : null
              }
            </div>
          ))}
        </div>
       
        
          <div className="button-section">
              <button className="button add" type="button" onClick={() => addFormFields()}>Add</button>
              <button className="button submit" type="submit" onClick={handleSubmit}>Submit</button>
          </div>
   
    </div>
    <div className="form-group Ducuments">
    <label>
        Documents:</label>
        <input type="file" multiple accept="application/pdf" onChange={ onFileChange} name="document"/>
    
    </div>
    <div className="footer">
        <button type="button" onClick={validateInputs} >Submit</button>
    </div>
</form>

<CSVLink {...csvLink}><button type="button">Download Profile Data</button></CSVLink>
</div>
   
)


}

export default Form;



// data="formData" filename="profileData.csv"