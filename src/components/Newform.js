import { useState } from 'react';
import { CSVLink} from 'react-csv';

import './style.css';
function Form() {

    

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

    const onChangeHandler = (e) => {
        setFormData(() => ({
            ...formData,
            [e.target.name]: e.target.value
        }))
        
    }

    const onImageChange = (e) => {
        setFormData(() => (
            {
                ...formData,
                [e.target.name]: [...e.target.files]
            }
        ))
    }

    const onFileChange = (e) => {
        setFormData(() => (
            {
                ...formData,
                [e.target.name]: [...e.target.files]
            }
        ))
    }


const arrData = Object.entries(formData);
      



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
    filename: 'Profile.csv',
    data: arrData,

}


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

    <h1 className='header-name'>Data Form</h1>
<div className="form-group Title">
    <label htmlFor="title" className="form-label">Title </label>
       <div className="form-control-pair">
       <div>
            <input type="radio" name="Title" value="Mr." onChange={onChangeHandler}/>
            <label htmlFor="Mr.">Mr.</label>
        </div>
        <div>
            <input type="radio" name="Title" value="Mrs." onChange={onChangeHandler}/>
            <label htmlFor="Mrs.">Mrs.</label>
        </div>
       </div>
    </div>
    <div className="first-set">
    <div className="form-group Surname">
    <label>
        Surname:</label>
        <input type="text" 
        name="Surname" placeholder="Surname" 
       onChange= {onChangeHandler} id="surname"/>
     <div class="error"></div>
    </div>
    <div className="form-group Firstname" >
    <label>
        Firstname:</label>
        <input type="text" placeholder="Firstname" 
        name= "Firstname"
       onChange= {onChangeHandler} id="firstname"/>
     <div class="error"></div>
    </div>
    <div className="form-group Other-names">
    <label>
        Other names: </label>
        <input type="text" name="Othernames"  onChange= {onChangeHandler} placeholder="Othernames" id="othernames"/>
        <div class="error"></div>
    </div>
    </div>
    
    
    <div className="Gender form-group">
    <label htmlFor="gender" className="form-label"> Gender: </label>
       <div className="form-control-pair">
        <div>
            <input type="radio" name="gender" value="male" onChange={onChangeHandler}/>
            <label htmlFor="male">Male</label>
        </div>
        <div>
            <input type="radio" name="gender" value="female" onChange={onChangeHandler}/>
            <label htmlFor="female">Female</label>
        </div>
       </div>
    </div>

    <div className="first-set">
    <div className="form-group Region">
    <label>
        Region:</label>
        <input type="text" name="Region" placeholder="Region" onChange={onChangeHandler}/>
    
    {/* value={region} */}
    </div>
    <div className="form-group Country">
    <label>
        Country: </label>
        <input type="text" name="Country" placeholder="Country"  onChange={onChangeHandler}/>
   
    {/* value={country} */}
    </div>
    <div className="form-group DOB">
    <label>
        Date of Birth:</label>
        <input type="text" name="dateOfBirth" placeholder="dd/mm/yyyy"  onChange={onChangeHandler}/>
    
    {/* value={dob} */}
    </div>
    </div>
    <div className="first-set">
    <div className="form-group Address">
    <label>  
        Address:</label>
        <input type="text" name="Address" placeholder="Address" onChange={onChangeHandler}/>
  
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
       <div className="form-control-pair">
        <div>
            <input type="radio" name="maritalStatus" value="married" onChange={onChangeHandler}/>
            <label htmlFor="married">Married</label>
        </div>
        <div>
            <input type="radio" name="maritalStatus" value="single" onChange={onChangeHandler}/>
            <label htmlFor="single">Single</label>
        </div>
       </div>
    </div>

    </div>
    <div className="form-group Occupation">
    <label htmlFor="occupation" className="form-label">Are you employed? </label>
       <div className="form-control-pair" >
        <div>
            <input type="radio" name="employed" value="yes" onChange={onChangeHandler}/>
            <label htmlFor="yes">Yes</label>
        </div>
        <div>
            <input type="radio" name="employed" value="no" onChange={onChangeHandler}/>
            <label htmlFor="no">No</label>
        </div>
       </div>
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
        name= "jobOther"
       onChange= {onChangeHandler} id="jobOther"/>
     </div> : null}
   
    <div className="form-group Disability">
    <label htmlFor="Disability" className="form-label">Are you disabled? </label>
       <div className="form-control-pair">
       <div>
            <input type="radio" name="disbility" value="yes" onChange={onChangeHandler}/>
            <label htmlFor="yes">Yes</label>
        </div>
        <div>
            <input type="radio" name="disability" value="no" onChange={onChangeHandler}/>
            <label htmlFor="no">No</label>
        </div>
       </div>
    </div>
    <div className="form-group School-attended">
    <label>
        School attended: </label>
        <div className="school-d">
        {schoolValues.map((element, index) => (
            <div className="form-inline row" key={index}>
              <label>School Name</label>
              <input type="text" className="inline-input col-3" placeholder="eg. Achimota"  name="schoolname" value={element.schoolname || ""} onChange={e => handleChange(index, e)} />
              <label>Start Date</label>
              <input type="text" name="startdate" className="inline-input col-3" placeholder="eg. 05/11/2018" value={element.startdate || ""} onChange={e => handleChange(index, e)} />
              <label>End Date</label>
              <input type="text" name="enddate" className="inline-input col-3" placeholder="eg. 18/08/2022" value={element.enddate || ""} onChange={e => handleChange(index, e)} />
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
        <button type="button" onClick={() => console.log(formData)} >Submit</button>
    </div>
</form>

<CSVLink {...csvLink}>Download Profile Data</CSVLink>
</div>
   
)


}

export default Form;



// data="formData" filename="profileData.csv"