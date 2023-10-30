/* eslint-disable react/prop-types */
import "../styles/PersonalInfo.scss";

const PersonalInfo = ({ person, handlePersonChange }) => {
  return (
    <div className="personal-info">
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="John Doe"
        onChange={handlePersonChange}
        value={person.name}
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="johndoe@example.com"
        onChange={handlePersonChange}
        value={person.email}
      />
      <label htmlFor="phone">Phone Number:</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        placeholder="123-456-7890"
        onChange={handlePersonChange}
        value={person.phone}
      />
      <label htmlFor="address">Address</label>
      <input
        type="text"
        id="address"
        name="address"
        placeholder="123 Main St, City, Country"
        onChange={handlePersonChange}
        value={person.address}
      />
    </div>
  );
};

export default PersonalInfo;
