import React, { useContext, useEffect, useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Select from 'react-select';
import axios from 'axios';
import { DataContext } from '../../context';
import Modal from 'react-modal'; // Import the react-modal library
import MessageSheduleModal from './MessageSheduleModal';
import API_BASE_URL from "../../config";



Modal.setAppElement('#root'); // Set the app root element (usually the root div in your HTML)

// ...
const options = [
    { value: 'Fresh', label: 'Fresh' },
    { value: 'Ready To Enroll', label: 'Ready To Enroll' },
    { value: 'Visit scheduled', label: 'Visit scheduled' },
    { value: 'Demo scheduled', label: 'Demo scheduled' },
    { value: 'Highly Intersted', label: 'Highly Intersted' },
    { value: 'Least Intersted', label: 'Least Intersted' },
    { value: 'Distance Issue', label: 'Distance Issue' },
    { value: 'Pricing Issue', label: 'Pricing Issue' },
    { value: 'Already Taken Service', label: 'Already Taken Service' },
    { value: 'Quality Issue', label: 'Quality Issue' },
    { value: 'Not Interested Anymore', label: 'Not Interested Anymore' },
    { value: 'Did Not Enquire', label: 'Did Not Enquire' },
    { value: 'Only Wanted Information', label: 'Only Wanted Information' },
    { value: 'Other', label: 'Other' }
];



const FormSchema = Yup.object().shape({
    from: Yup.date()
        .nullable()
        .test('from-to', 'From date must be before To date', function (from) {
            const to = this.parent.to;
            if (from && to) {
                return new Date(from) < new Date(to);
            }
            return true;
        })
        .required('From date is required'),

    to: Yup.date()
        .nullable()
        .test('from-to', 'To date must be after From date', function (to) {
            const from = this.parent.from;
            if (from && to) {
                return new Date(to) > new Date(from);
            }
            return true;
        })
        .required('To date is required'),
    leadStatus: Yup.array().min(1, 'Select at least one Lead Status'),
    course: Yup.array().min(1, 'Select at least one Lead Course'),
    leadscource: Yup.array().min(1, 'Select at least one Lead Scource'),
    template: Yup.string().required('Template is required'),
    templateBody: Yup.string().required('Template Body is required')
});

const MessageShedule = () => {
    // ...
    const [formData, setFormData] = useState({
        from: '',
        to: '',
        leadStatus: [],
        template: '',
        course: [],
        leadscource: [],
        templateBody: ''
    });

    const { service, serviceFunc, leadScource, leadScourceFunc } = useContext(DataContext);

    // State Are Defined Here!!
    const [emailTempObj, setEmailTempObj] = useState();
    const [leadObj, setLeadObj] = useState();
    const [modalFilterData, setModalFilterData] = useState();
    const [templateId, setTemplateId] = useState();
    const [modalExcludedList, setModalExcludedList] = useState();
    // State Are Defined Here!!
    const token = localStorage.getItem('token')

    const emailTemplateFunc = () => {
        axios.get(`${API_BASE_URL}/messagetemplate/`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }).then((values) => {
            console.log(values.data)
            setEmailTempObj(values.data)
        }).catch((err) => {
            console.log(err);
        })
    }

    const getLeadFunc = () => {
        axios.get(`${API_BASE_URL}/lead/`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then((values) => {
            setLeadObj(values.data);
            console.log(values.data);
        }).catch((err) => {
            console.log(err);
        })

    }

    useEffect(() => {
        getLeadFunc();
        emailTemplateFunc();
        leadScourceFunc();
        serviceFunc();
    }, [])

    // This is Exclude List
    const [inputValue, setInputValue] = useState('');
    const [list, setList] = useState([]);
    const [templateMessage, setTemplateMessage] = useState();
    const [templateSubject, setTemplateSubject] = useState();
    const [myResetForm, setResetFunc] = useState();

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleAddToList = () => {
        if (inputValue.trim() !== '') {
            setList([...list, inputValue]);
            setInputValue('');
        }
    };


    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <>
            <MessageSheduleModal myProps={{
                modalIsOpen: modalIsOpen,
                setModalIsOpen: setModalIsOpen,
                modalFilterData: modalFilterData,
                templateId: templateId,
                myResetForm: myResetForm,
                templateMessage: templateMessage,
                templateSubject: templateSubject,
                modalExcludedList: modalExcludedList
            }} />
            <div className='my-4 text-center font-bold text-2xl'>
                <h1 className='text-green-500 underline'>Message Sender Form</h1>
            </div>
            <div className="green-theme md:w-[60%] w-[90%] mx-8 md:mx-auto  mt-8 border-2 border-solid border-gray-500 shadow-xl rounded-xl p-4">
                <Formik
                    initialValues={formData}
                    validationSchema={FormSchema}
                    onSubmit={(values, { resetForm }) => {
                        const fromDate = new Date(values?.from);
                        const toDate = new Date(values?.to);
                        const filteredData = leadObj?.filter((lead) => {
                            const leadDateTime = new Date(lead.LeadDateTime);
                            return leadDateTime >= fromDate && leadDateTime <= toDate;
                        });
                        const myleadStatus = values?.leadStatus?.map((element, index) => {
                            return element.value
                        })
                        const myleadCourse = values?.course?.map((element, index) => {
                            return element.value
                        });
                        const myLeadScource = values?.leadscource?.map((element, index) => { return element.value })
                        console.log(myLeadScource);

                        const filteredDataLeadStatus = filteredData.filter(lead => { return myleadStatus.includes(lead.LeadStatus) });
                        console.log(filteredDataLeadStatus)
                        const filteredDataLeadStatusCourse = filteredDataLeadStatus.filter(lead => { return myleadCourse.includes(lead.CourseName) })
                        console.log(filteredDataLeadStatusCourse)
                        const filterdeDataLeadStatusCourseSource = filteredDataLeadStatusCourse.filter(lead => { return myLeadScource.includes(lead.LeadSource) })
                        const endData = filterdeDataLeadStatusCourseSource?.filter(lead => { return !list.includes(lead?.LeadPhone) })
                        const excludedList = filterdeDataLeadStatusCourseSource?.filter(lead => { return list.includes(lead?.LeadPhone) })
                        console.log(list);
                        console.log("endData", endData);
                        console.log("excludedList", excludedList);

                        // const finalFiltered
                        setTemplateId(values.template);
                        setTemplateMessage(values.templateBody);
                        setTemplateSubject(values.templateSubject);
                        setModalFilterData(endData);
                        setModalExcludedList(excludedList);
                        console.log(filterdeDataLeadStatusCourseSource);
                        setModalIsOpen(true);
                        setResetFunc(() => resetForm);
                    }}
                >

                    {({ values, setFieldValue, handleBlur }) => (
                        <Form>
                            <div className="mb-4">
                                <label htmlFor="from" className="block text-sm font-medium text-gray-700">
                                    From <span className='text-red-500'>*</span>
                                </label>
                                <Field
                                    type="date"
                                    name="from"
                                    id="from"
                                    className="mt-1 p-2 block w-full border rounded-md border-gray-300"
                                />
                                <ErrorMessage name="from" component="div" className="text-red-500" />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="to" className="block text-sm font-medium text-gray-700">
                                    To <span className='text-red-500'>*</span>
                                </label>
                                <Field
                                    type="date"
                                    name="to"
                                    id="to"
                                    className="mt-1 p-2 block w-full border rounded-md border-gray-300"
                                />
                                <ErrorMessage name="to" component="div" className="text-red-500" />
                            </div>
                            <div className='grid md:grid-cols-2 grid-cols-1'>

                                {/* Lead Status Div Start */}
                                <div className='col-span-1 mr-4'>
                                    <div className="mb-4">
                                        <label htmlFor="leadStatus" className="block text-sm font-medium text-gray-700">
                                            Lead Status <span className='text-red-500'>*</span>
                                        </label>
                                        <Select
                                            name="leadStatus"
                                            options={options}
                                            isMulti
                                            onChange={(selectedOptions) => setFieldValue('leadStatus', selectedOptions)}
                                            onBlur={handleBlur}
                                            value={values.leadStatus}
                                        />
                                        <ErrorMessage name="leadStatus" component="div" className="text-red-500" />
                                    </div>
                                </div>
                                {/* Lead Status End !! */}
                                <div className='col-span-1 mr-4'>
                                    <div className="mb-4">
                                        <label htmlFor="course" className="block text-sm font-medium text-gray-700">
                                            Lead Course <span className='text-red-500'>*</span>
                                        </label>

                                        <Select
                                            name="course"
                                            options={service?.map((element, index) => {
                                                return { value: element?.ServiceName, label: element?.ServiceName }
                                            })}
                                            isMulti
                                            onChange={(selectedOptions) => setFieldValue('course', selectedOptions)}
                                            onBlur={handleBlur}
                                            value={values.course}
                                        />
                                        <ErrorMessage name="course" component="div" className="text-red-500" />
                                    </div>
                                </div>
                            </div>
                            <div className='grid md:grid-cols-2 grid-cols-1'>
                                <div className='col-span-1 mr-4'>
                                    <div className="mb-4">
                                        <label htmlFor="leadscource" className="block text-sm font-medium text-gray-700">
                                            Lead Scource <span className='text-red-500'>*</span>
                                        </label>
                                        <Select
                                            name="leadscource"
                                            id="leadscource"
                                            options={leadScource?.map((element, index) => {
                                                return { value: element?.LeadSource, label: element?.LeadSource }
                                            })}
                                            isMulti
                                            onChange={(selectedOptions) => setFieldValue('leadscource', selectedOptions)}
                                            onBlur={handleBlur}
                                            value={values.leadscource}
                                        />
                                        <ErrorMessage name="leadscource" component="div" className="text-red-500" />
                                    </div>
                                </div>
                                
                                <div className='col-span-1 mr-4'>
                                    <div className="mb-4">
                                        <label htmlFor="template" className="block text-sm font-medium text-gray-700">
                                            Template <span className='text-red-500'>*</span>
                                        </label>
                                        <Field
                                            as="select"
                                            name="template"
                                            id="template"
                                            className="mt-1 p-2 border rounded-md border-gray-300 w-full"
                                            value={values.template}
                                            onChange={(e) => {
                                                const selectedTemplateId = e.target.value;
                                                setFieldValue("template", selectedTemplateId);
                                                const tempObj = emailTempObj.find((element) => element.TemplateID == selectedTemplateId);
                                                console.log(tempObj);
                                                setFieldValue("templateBody", tempObj ? tempObj.TemplateMessage : "");
                                            }}
                                        >
                                            <option value="">Select a template</option>
                                            {emailTempObj?.map((element, index) => (
                                                <option value={element.TemplateID} key={index}>
                                                    {element.TemplateName}
                                                </option>
                                            ))}
                                        </Field>
                                        <ErrorMessage name="template" component="div" className="text-red-500" />
                                    </div>
                                </div>
                            </div>
                            {/* Exclude Numbers */}
                            <div >
                                <h2 className='text-gray-700'>Exclude Number: </h2>
                                <div className='col-span-1 border-2 border-solid p-4 rounded border-gray-500'>
                                    <div className='relative'>
                                        <input
                                            type="text"
                                            placeholder="Exclude Number"
                                            className='mt-1 p-2  border rounded-md border-gray-300 w-full'
                                            value={inputValue}
                                            onChange={handleInputChange}
                                            onKeyPress={(e) => {
                                                if (e.key === 'Enter') handleAddToList();
                                            }}
                                        />
                                        <button
                                            type='button'
                                            onClick={handleAddToList} className='text-white rounded py-2 px-4 absolute right-[.1rem] top-[0.30rem]'>Add</button>
                                    </div>
                                    <div>
                                        <h3>Exclude Number List:</h3>
                                        <ul>
                                            {list.map((item, index) => (
                                                <li key={index}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                {/* Template Body */}
                            </div>
                            <div className="mb-4">
                                <label htmlFor="templateBody" className="block text-sm font-medium text-gray-700">
                                    Template Body
                                </label>
                                <Field
                                    as="textarea"
                                    id="templateBody"
                                    name="templateBody"
                                    placeholder="Enter Template Body"
                                    rows="4"
                                    className="mt-1 p-2 w-full rounded border"
                                    value={values.templateBody}
                                    onChange={(e) => {
                                        setFieldValue("templateBody", setFieldValue(e.target.value))
                                    }}
                                />
                                <ErrorMessage name="templateBody" component="p" className="text-red-600 text-sm" />
                                {/* End Template Body */}
                            </div>
                            {/* Exclude Number End */}
                            <br />
                            <div className='text-center '>
                                <button
                                    type="submit"
                                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
                                >
                                    Submit
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </>
    );
};

export default MessageShedule;
