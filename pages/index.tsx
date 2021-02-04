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
        onChange={(e) => field.onChange(e.target.value)}
        onBlur={field.onBlur}
      />
    </div>
  );
};

const TextAreaField = ({ label, field }) => {
  return (
    <div>
      <label className="block font-semibold">{label}</label>
      <textarea
        className="border p-1 w-full"
        value={field.value ?? ""}
        onChange={(e) => field.onChange(e.target.value)}
        onBlur={field.onBlur}
        rows={7}
      />
    </div>
  );
};

const NumberField = ({ label, field }) => {
  return (
    <div>
      <label className="block font-semibold">{label}</label>
      <input
        className="border p-1 w-full"
        type="number"
        value={field.value ?? ""}
        onChange={(e) => field.onChange(e.target.value)}
        onBlur={field.onBlur}
      />
    </div>
  );
};

const Education = ({ field }) => {
  return (
    <fieldset className="border px-2 py-1">
      <legend className="font-bold uppercase text-xl text-green-900">
        Education
      </legend>
      {field.value?.map((e, i) => {
        return (
          <div className="flex border-b-2 pb-2 border-black">
            <div className="flex-1">
              <TextField
                label="School"
                field={{
                  value: e.school,
                  onChange: (value) => {
                    field.onChange(
                      field.value.map((e, j) => {
                        if (i === j) {
                          return {
                            ...e,
                            school: value,
                          };
                        }
                        return e;
                      })
                    );
                  },
                }}
              />
              <TextField
                label="Degree"
                field={{
                  value: e.degree,
                  onChange: (value) => {
                    field.onChange(
                      field.value.map((e, j) => {
                        if (i === j) {
                          return {
                            ...e,
                            degree: value,
                          };
                        }
                        return e;
                      })
                    );
                  },
                }}
              />
              <TextField
                label="Period"
                field={{
                  value: e.period,
                  onChange: (value) => {
                    field.onChange(
                      field.value.map((e, j) => {
                        if (i === j) {
                          return {
                            ...e,
                            period: value,
                          };
                        }
                        return e;
                      })
                    );
                  },
                }}
              />
              <TextAreaField
                label="Description"
                field={{
                  value: e.description,
                  onChange: (value) => {
                    field.onChange(
                      field.value.map((e, j) => {
                        if (i === j) {
                          return {
                            ...e,
                            description: value,
                          };
                        }
                        return e;
                      })
                    );
                  },
                }}
              />
            </div>
            <button
              className="text-3xl"
              onClick={() => {
                field.onChange(field.value.filter((e, j) => j !== i));
              }}
            >
              <i className="las la-minus-circle"></i>
            </button>
          </div>
        );
      })}
      <button
        className="text-3xl"
        onClick={() => {
          field.onChange([
            ...field.value,
            { school: "", degree: "", period: "", description: "" },
          ]);
        }}
      >
        <i className="las la-plus-circle"></i>
      </button>
    </fieldset>
  );
};

const WorkHistory = ({ field }) => {
  return (
    <fieldset className="border px-2 py-1">
      <legend className="font-bold uppercase text-xl text-green-900">
        Work history
      </legend>
      {field.value?.map((e, i) => {
        return (
          <div className="flex border-b-2 pb-2 border-black">
            <div className="flex-1">
              <TextField
                label="Company"
                field={{
                  value: e.company,
                  onChange: (value) => {
                    field.onChange(
                      field.value.map((e, j) => {
                        if (i === j) {
                          return {
                            ...e,
                            company: value,
                          };
                        }
                        return e;
                      })
                    );
                  },
                }}
              />
              <TextField
                label="Position"
                field={{
                  value: e.position,
                  onChange: (value) => {
                    field.onChange(
                      field.value.map((e, j) => {
                        if (i === j) {
                          return {
                            ...e,
                            position: value,
                          };
                        }
                        return e;
                      })
                    );
                  },
                }}
              />
              <TextField
                label="Period"
                field={{
                  value: e.period,
                  onChange: (value) => {
                    field.onChange(
                      field.value.map((e, j) => {
                        if (i === j) {
                          return {
                            ...e,
                            period: value,
                          };
                        }
                        return e;
                      })
                    );
                  },
                }}
              />
              <TextAreaField
                label="Description"
                field={{
                  value: e.description,
                  onChange: (value) => {
                    field.onChange(
                      field.value.map((e, j) => {
                        if (i === j) {
                          return {
                            ...e,
                            description: value,
                          };
                        }
                        return e;
                      })
                    );
                  },
                }}
              />
            </div>
            <button
              className="text-3xl"
              onClick={() => {
                field.onChange(field.value.filter((e, j) => j !== i));
              }}
            >
              <i className="las la-minus-circle"></i>
            </button>
          </div>
        );
      })}
      <button
        className="text-3xl"
        onClick={() => {
          field.onChange([
            ...field.value,
            { company: "", position: "", period: "", description: "" },
          ]);
        }}
      >
        <i className="las la-plus-circle"></i>
      </button>
    </fieldset>
  );
};

class MyForm {
  bannerHeight = Field(NumberField);
  imageSize = Field(NumberField);
  name = Field(TextField);
  imageUrl = Field(TextField);
  phone = Field(TextField);
  email = Field(TextField);
  address = Field(TextField);
  dob = Field(TextField);
  education = Field(Education);
  workHistory = Field(WorkHistory);

  init = () => {
    this.name.value = "Some Person";
    this.imageUrl.value = "https://github.com/dusanjovanov.png";
    this.phone.value = "+1 555 123 123";
    this.email.value = "example@example.com";
    this.address.value = "123 Main st.";
    this.dob.value = "23.01.1984.";
    this.education.value = [
      {
        school: "Some school",
        degree: "Bachelor of applied sciences",
        period: "29.1.2001 - 13.2.2005",
        description: "asdasddaasddas",
      },
    ];
    this.workHistory.value = [
      {
        company: "Some comapny",
        position: "Frontend developer",
        period: "29.1.2001 - 13.2.2005",
        description: "asdasddaasddas",
      },
    ];
    this.bannerHeight.value = 100;
    this.imageSize.value = 120;
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
    this.bannerHeight.props = {
      label: "Banner height",
    };
    this.imageSize.props = {
      label: "Image size",
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
    <div className="form px-2 py-1 overflow-y-auto">
      <style jsx>{`
        .form {
          height: calc(100vh);
        }
      `}</style>
      <fieldset className="border px-2 py-1 mb-2">
        <legend className="font-bold uppercase text-green-900 text-xl">
          Bio
        </legend>
        {fields.name}
        {fields.imageUrl}
        {fields.phone}
        {fields.email}
        {fields.address}
        {fields.dob}
      </fieldset>
      {fields.education}
      {fields.workHistory}
      <fieldset className="border px-2 py-1 mb-2">
        <legend className="font-bold uppercase text-green-900 text-xl">
          Style
        </legend>
        {fields.bannerHeight}
        {fields.imageSize}
      </fieldset>
    </div>
  );
};

const Template = () => {
  const { values } = useSubscribe();
  return (
    <div className="template">
      <style jsx>{`
        .template {
          font-size: 14px;
        }
        .head {
          height: ${values.bannerHeight}px;
          color: white;
          font-size: 14px;
        }
        .image-container {
          width: ${values.imageSize}px;
          height: ${values.imageSize}px;
          margin-top: -${values.imageSize / 2}px;
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
      <div className="head bg-green-800 px-2 py-1 flex">
        <div className="name text-xl">{values.name}</div>
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
      <div className="body px-2 py-1">
        <div className="flex mb-1">
          <div className="image-container border border-green-800">
            <img src={values.imageUrl} />
          </div>
          <div className="ml-auto">Date of birth: {values.dob}</div>
        </div>
        <div className="education">
          <label className="text-xl font-semibold border-b-2 block">
            Education
          </label>
          {values.education?.map((e) => {
            return (
              <div>
                <div className="font-semibold">{e.school}</div>
                <div className="">{e.degree}</div>
                <div className="italic text-gray-600">{e.period}</div>
                <div className="">{e.description}</div>
              </div>
            );
          })}
        </div>
        <div className="work-history">
          <label className="text-xl font-semibold border-b-2 block">
            Employment history
          </label>
          {values.workHistory?.map((e) => {
            return (
              <div>
                <div className="font-semibold">{e.company}</div>
                <div className="">{e.position}</div>
                <div className="italic text-gray-600">{e.period}</div>
                <div className="">{e.description}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
