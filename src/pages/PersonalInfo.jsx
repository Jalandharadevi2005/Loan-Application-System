import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FormContext } from "../context/FormContext";

const schema = yup.object({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  phone: yup
    .string()
    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
    .required("Phone number is required"),
  dob: yup.string().required("Date of Birth is required"),
});

const PersonalInfo = () => {
  const { formData, setFormData } = useContext(FormContext);

  const {
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      firstName: formData.firstName || "",
      lastName: formData.lastName || "",
      email: formData.email || "",
      phone: formData.phone || "",
      dob: formData.dob || "",
    },
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h2>Personal Information</h2>

      <input
        {...register("firstName")}
        name="firstName"
        placeholder="First Name"
        value={formData.firstName || ""}
        onChange={handleChange}
      />
      <p className="error">
  {errors.firstName?.message}
</p>

      <br />

      <input
        {...register("lastName")}
        name="lastName"
        placeholder="Last Name"
        value={formData.lastName || ""}
        onChange={handleChange}
      />
      <p>{errors.lastName?.message}</p>

      <br />

      <input
        {...register("email")}
        name="email"
        placeholder="Email"
        value={formData.email || ""}
        onChange={handleChange}
      />
      <p>{errors.email?.message}</p>

      <br />

      <input
        {...register("phone")}
        name="phone"
        placeholder="Phone Number"
        value={formData.phone || ""}
        onChange={handleChange}
      />
      <p>{errors.phone?.message}</p>

      <br />

      <input
        type="date"
        {...register("dob")}
        name="dob"
        value={formData.dob || ""}
        onChange={handleChange}
      />
      <p>{errors.dob?.message}</p>
    </div>
  );
};

export default PersonalInfo;