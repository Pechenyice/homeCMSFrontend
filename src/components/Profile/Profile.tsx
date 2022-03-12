import React, { useState } from 'react';
import styles from 'Profile.module.scss';

const Profile = () => {
  // let [state, setState] = useState({ ...data });

  // function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
  //   setState({
  //     ...state,
  //     [e.target.name]: e.target.type !== 'checkbox' ? e.target.value : e.target.checked,
  //   });
  // }

  return (
    <>
      {/* <input value={state.name} onChange={handleInputChange} name={'name'} />
      <input value={state.fullName} onChange={handleInputChange} name={'fullName'} />
      <input value={state.district.value} onChange={handleInputChange} name={'district'} />
      <input value={state.type.value} onChange={handleInputChange} name={'type'} />
      <input
        type="checkbox"
        checked={state.educationLicense}
        onChange={handleInputChange}
        name={'educationLicense'}
      />
      <input
        type="checkbox"
        checked={state.medicineLicense}
        onChange={handleInputChange}
        name={'medicineLicense'}
      />
      <input
        type="checkbox"
        checked={state.innovationGround}
        onChange={handleInputChange}
        name={'innovationGround'}
      />
      <input value={state.supervisor} onChange={handleInputChange} name={'supervisor'} />
      <input value={state.responsible} onChange={handleInputChange} name={'responsible'} />
      <button onClick={() => changeProfileData(state)}>save</button> */}
      <div>profile</div>
    </>
  );
};

export default Profile;
