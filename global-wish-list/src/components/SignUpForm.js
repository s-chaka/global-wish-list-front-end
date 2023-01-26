import { useState } from "react";
import PropTypes from 'prop-types';

const SignUpForm = (props) => {
    const [formFields, setFormFields] = useState({
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        wishList: "",
        story: ""
    });

    const onFirsNameChange = (e) => {
        setFormFields({
            ...formFields,
            firstName: e.target.value,
        });
    };
    const onLastNameChange = (e) => {
        setFormFields({
            ...formFields,
            lastName: e.target.value,
        });
    };
    const onEmailChange = (e) => {
        setFormFields({
            ...formFields,
            email: e.target.value,
        });
    };
    const onAddressChange = (e) => {
        setFormFields({
            ...formFields,
            address: e.target.value,
        });
    };
    const onWishListChange = (e) => {
        setFormFields({
            ...formFields,
            wishList: e.target.value,
        });
    };
    const onStoryChange = (e) => {
        setFormFields({
            ...formFields,
            story: e.target.value,
        });
    };

    const FormSubmit = (e) => {
        e.preventDefault();
        props.onAddUserData({
            firstName: formFields.firstName,
            lastName: formFields.lastName,
            email: formFields.email,
            address: formFields.address,
            wishList: formFields.wishList,
            story: formFields.story
        });
        setFormFields({
            firstName: "",
            lastName: "",
            email: "",
            address: "",
            wishList: "",
            story: ""
        })
    };

    const handleChange = (e)=> {
        setFormFields({...formFields, [e.target.name]: e.target.value});
    }
return (
    <form onSubmit={FormSubmit}>
        <div>
            <label htmlFor="firstName">First Name: </label>
            <input 
                name="firstName" 
                value={formFields.firstName}
                onChange={handleChange}
            />
        </div>
        <div>
            <label htmlFor="lastName">Last Name: </label>
            <input 
                name="lastName" 
                value={formFields.lastName}
                onChange={handleChange}
            />
        </div>
        <div>
            <label htmlFor="email">Email: </label>
            <input 
                name="email" 
                value={formFields.email}
                onChange={handleChange}
            />
        </div>
        <div>
            <label htmlFor="address">Address: </label>
            <input 
                name="address" 
                value={formFields.address}
                onChange={handleChange}
            />
        </div>
        <div>
            <label htmlFor="wishList">Wish List: </label>
            <input 
                name="wishList" 
                value={formFields.wishList}
                onChange={handleChange}
            />
        </div>
        <div>
            <label htmlFor="story">Story: </label>
            <input 
                name="story" 
                value={formFields.story}
                onChange={handleChange}
            />
        </div>
        <button type="submit">Sign Up </button>
    </form>
);
};

export default SignUpForm;