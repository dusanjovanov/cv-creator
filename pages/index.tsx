import Head from "next/head";
import "tailwindcss/tailwind.css";
import { Form, Field, useSubscribe, useFormContext } from "@formx/formy";
import { useEffect, useRef } from "react";

const TextField = ({ label, field }) => {
  return (
    <div>
      <label className="block font-semibold">{label}</label>
      <input
        className="border p-1 w-full"
        type="text"
        value={field.value ?? ""}
        onChange={e => field.onChange(e.target.value)}
        onBlur={field.onBlur}
      />
    </div>
  );
};

class MyForm {
  name = Field(TextField);
  imageUrl = Field(TextField);
  phone = Field(TextField);
  email = Field(TextField);
  address = Field(TextField);
  dob = Field(TextField);
  init = () => {
    this.name.value = "Some Person";
    this.imageUrl.value = "https://github.com/dusanjovanov.png";
    this.phone.value = "+1 555 123 123";
    this.email.value = "example@example.com";
    this.address.value = "123 Main st";
    this.dob.value = "23.01.1984.";
  };
  update = () => {
    this.name.props = {
      label: "Name",
    };
    this.imageUrl.props = {
      label: "Image URL",
    };
    this.phone.props = {
      label: "Phone",
    };
    this.email.props = {
      label: "Email",
    };
    this.address.props = {
      label: "Address",
    };
    this.dob.props = {
      label: "Date of birth",
    };
  };
}

export default function Home() {
  const formRef = useRef<Form>();

  useEffect(() => {
    formRef.current?.resetForm();
  }, []);

  return (
    <div className="grid grid-cols-2">
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"
        ></link>
      </Head>
      <Form onSubmit={() => {}} form={MyForm} context={{}} ref={formRef}>
        {({ fields }) => {
          return (
            <>
              <Template />
              <Right />
            </>
          );
        }}
      </Form>
    </div>
  );
}

const Right = () => {
  const { fields } = useFormContext();

  return (
    <div className="px-2 py-1">
      {fields.name}
      {fields.imageUrl}
      {fields.phone}
      {fields.email}
      {fields.address}
      {fields.dob}
    </div>
  );
};

const Template = () => {
  const { values } = useSubscribe();
  const color = "white";
  return (
    <div className="template">
      <style jsx>{`
        .template {
          font-size: 14px;
        }
        .banner {
          height: 120px;
          color: white;
          font-size: 14px;
        }
        .image-container {
          width: 150px;
          height: 150px;
          margin-top: -75px;
          border-radius: 100%;
          overflow: hidden;
        }
        .image-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .name {
          font-family: Lato;
        }
      `}</style>
      <div className="banner bg-green-800 px-2 py-1 flex">
        <h1 className="name text-2xl font-bold">{values.name}</h1>
        <div className="ml-auto">
          <div className="flex items-center justify-end">
            <i className="lar la-envelope mr-1"></i>
            <div>{values.email}</div>
          </div>
          <div className="flex items-center justify-end">
            <i className="las la-phone mr-1"></i>
            <div>{values.phone}</div>
          </div>
          <div className="flex items-center justify-end">
            <i className="las la-map-marker mr-1"></i>
            <div>{values.address}</div>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="image-container ml-2">
          <img src={values.imageUrl} />
        </div>
        <div className="ml-auto">Date of birth: {values.dob}</div>
      </div>
    </div>
  );
};
