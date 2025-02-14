import Contact from "../models/contactModel.js";

export const postContact = async (req, res) => {
    const {name, email, message} = req.body

    if(!name) {
        return res.status(400).json({
            message : "Name is required"
        })
    }
    if(!email) {
        return res.status(400).json({
            message : "Email is required"
        })
    }
    if(!message) {
        return res.status(400).json({
            message : "Message is required"
        })
    }

    try {
        const newContact = new Contact({name, email, message})
        await newContact.save()
        res.status(201).json({
            message : "message sent successfully"
        })

    } catch (error) {
        res.status(500).json({
            message : "internal server error"
        })
        console.error(`Error: ${error.message}`);
    }
}

export const getContact = async (req, res) => {

    try {    
        const contact = await Contact.find()
        res.status(200).json({
            success : true,
            data : contact
        })
    } catch (error) {
        res.status(500).json({
            message : "internal server error"
        })
        console.error(`Error: ${error.message}`);
    }
}