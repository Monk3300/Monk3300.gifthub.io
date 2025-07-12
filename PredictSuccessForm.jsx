
import React, { useState } from 'react';

const PredictSuccessForm = () => {
  const [formData, setFormData] = useState({
    performance: '',
    potential: '',
    roleCriticality: '',
    tenure: '',
    managerRating: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call prediction API here
    console.log('Submitting prediction with data:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Predict Employee Success</h2>

      <label className="block mb-2">Performance Score</label>
      <input type="number" name="performance" onChange={handleChange} className="w-full mb-4 p-2 border" />

      <label className="block mb-2">Potential Score</label>
      <input type="number" name="potential" onChange={handleChange} className="w-full mb-4 p-2 border" />

      <label className="block mb-2">Role Criticality</label>
      <select name="roleCriticality" onChange={handleChange} className="w-full mb-4 p-2 border">
        <option value="">Select...</option>
        <option value="high">High</option>
        <option value="moderate">Moderate</option>
        <option value="low">Low</option>
      </select>

      <label className="block mb-2">Tenure (years)</label>
      <input type="number" name="tenure" onChange={handleChange} className="w-full mb-4 p-2 border" />

      <label className="block mb-2">Manager Rating</label>
      <input type="number" name="managerRating" onChange={handleChange} className="w-full mb-4 p-2 border" />

      <button type="submit" className="mt-4 bg-blue-600 text-white py-2 px-4 rounded">Predict</button>
    </form>
  );
};

export default PredictSuccessForm;
