import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Router
import { useHistory } from "react-router-dom";

// Redux
import { connect } from "react-redux";
import { postPostData } from "../../redux/actions/dataActions";

const PostSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, "Too Short!")
    .max(25, "Too Long!")
    .required("Required"),
  category_name: Yup.string().required("Required"),
  body: Yup.string()
    .min(5, "Too Short!")
    .max(20, "Too Long!")
    .required("Required")
});

const FormNewPost = params => {
  const { first_name, last_name } = params.user.credentials[0];
  const [postValue, setPostValue] = useState({});

  let history = useHistory();
  useEffect(() => {
    console.log("ini state : ", postValue);
  });

  return (
    <Formik
      initialValues={{
        id: new Date().getTime(),
        title: "",
        body: "",
        author: `${first_name} ${last_name}`,
        slug: "",
        category_name: "Tech",
        created_at: `${new Date()}`,
        updated_at: ""
      }}
      validationSchema={PostSchema}
      onSubmit={values => {
        // let slug = new Object()
        let newSlug = values.title
          .toString()
          .toLowerCase()
          .replace(/\s+/g, "-")
          .replace(/[^\w\-]+/g, "")
          .replace(/\-\-+/g, "-")
          .replace(/^-+/, "")
          .replace(/-+$/, "");
        values.slug = newSlug;
        console.log("values akhir : ", values);
        setPostValue(values);
        params.postPost(values);
        history.push("/");
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <div className="card-body">
            <div className="form-group row mb-4">
              <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
                Title
              </label>
              <div className="col-sm-12 col-md-7">
                <Field name="title" type="text" className="form-control" />
                <small>
                  <ErrorMessage name="title" />
                </small>
              </div>
            </div>

            <div className="form-group row mb-4">
              <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
                Category
              </label>
              <div className="col-sm-12 col-md-7">
                <Field
                  component="select"
                  name="category_name"
                  className="form-control selectric"
                >
                  <option value="Tech">Tech</option>
                  <option value="News">News</option>
                  <option value="Political">Political</option>
                </Field>
                <small>
                  <ErrorMessage name="category" />
                </small>
              </div>
            </div>
            <div className="form-group row mb-4">
              <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
                Body
              </label>
              <div className="col-sm-12 col-md-7">
                <Field name="body" as="textarea" className="form-input" />
              </div>
              <small>
                <ErrorMessage name="content" />
              </small>
            </div>
            <div className="form-group row mb-4">
              <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3"></label>
              <div className="col-sm-12 col-md-7">
                <button type="submit" className="btn btn-primary">
                  Create Post
                </button>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

const mapStateToProps = state => ({
  user: state.user
});

const mapActionToProps = {
  postPostData
};

export default connect(mapStateToProps, mapActionToProps)(FormNewPost);
