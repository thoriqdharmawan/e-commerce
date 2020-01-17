import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const PostSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, "Too Short!")
    .max(10, "Too Long!")
    .required("Required"),
  category: Yup.string().required("Required"),
  content: Yup.string()
    .min(5, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
  image: Yup.string().required("Required"),
  tags: Yup.string()
    .min(1, "Too Short!")
    .max(10, "Too Long!")
    .required("Required"),
  status: Yup.string().required("Required")
});

const FormNewPost = () => {
  const [postValue, setPostValue] = useState({});

  useEffect(() => {
    // console.log("ini state : ", postValue);
  });

  return (
    <Formik
      initialValues={{
        title: "",
        category: "Tech",
        content: "",
        image: "",
        tags: "",
        status: "Publish"
      }}
      validationSchema={PostSchema}
      onSubmit={values => {
        console.log("form : ", values);
        setPostValue(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <div class="card-body">
            <div class="form-group row mb-4">
              <label class="col-form-label text-md-right col-12 col-md-3 col-lg-3">
                Title
              </label>
              <div class="col-sm-12 col-md-7">
                <Field name="title" type="text" class="form-control" />
                <small>
                  <ErrorMessage name="title" />
                </small>
              </div>
            </div>
            <div class="form-group row mb-4">
              <label class="col-form-label text-md-right col-12 col-md-3 col-lg-3">
                Category
              </label>
              <div class="col-sm-12 col-md-7">
                <Field
                  component="select"
                  name="category"
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
            <div class="form-group row mb-4">
              <label class="col-form-label text-md-right col-12 col-md-3 col-lg-3">
                Content
              </label>
              <div class="col-sm-12 col-md-7">
                <Field name="content" as="textarea" className="form-input" />
              </div>
              <small>
                <ErrorMessage name="content" />
              </small>
            </div>
            <div class="form-group row mb-4">
              <label class="col-form-label text-md-right col-12 col-md-3 col-lg-3">
                Thumbnail
              </label>
              <div class="col-sm-12 col-md-7">
                <div id="image-preview" class="image-preview">
                  <label for="image-upload" id="image-label">
                    Choose File
                  </label>
                  <Field type="file" name="image" id="image-upload" />
                  <small>
                    <ErrorMessage name="image" />
                  </small>
                </div>
              </div>
            </div>
            <div class="form-group row mb-4">
              <label class="col-form-label text-md-right col-12 col-md-3 col-lg-3">
                Tags
              </label>
              <div class="col-sm-12 col-md-7">
                <Field name="tags" type="text" class="form-control inputtags" />
                <small>
                  <ErrorMessage name="tags" />
                </small>
              </div>
            </div>
            <div class="form-group row mb-4">
              <label class="col-form-label text-md-right col-12 col-md-3 col-lg-3">
                Status
              </label>
              <div class="col-sm-12 col-md-7">
                <Field
                  component="select"
                  name="status"
                  className="form-control selectric"
                >
                  <option value="Publish">Publish</option>
                  <option value="Draft">Draft</option>
                  <option value="Pending">Pending</option>
                </Field>
                <small>
                  <ErrorMessage name="status" />
                </small>
              </div>
            </div>
            <div class="form-group row mb-4">
              <label class="col-form-label text-md-right col-12 col-md-3 col-lg-3"></label>
              <div class="col-sm-12 col-md-7">
                <button type="submit" class="btn btn-primary">
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

export default FormNewPost;
