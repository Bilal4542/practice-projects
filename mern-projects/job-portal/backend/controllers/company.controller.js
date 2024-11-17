import {Company} from '../modals/company.modal.js'

export const registerCompany = async (req,ees) => {
    try {
        const {companyName} = req.body;
        if(!companyName){
            return res.status(400).json({
                message:"Company Name is Required.",
                success:false
            });
        };
        let company = await Company.findOne({name:companyName});
        if(company){
            return res.status(400).json({
                message:"You Can't Register Same Company.",
                success:false
            });
        };
        company = await Company.create({
            name:companyName,
            userId:req.findOne
        });
        return res.status(201).json({
            message:"Company Registered Successfully.",
            company,
            success:true
        })
    } catch (error) {
        console.log(error)
    }
}

//all companies
export const getCompany =  async (req,res)=>{
    try {
        const userId = req.id; //logged in user id
        const companies = await Company.find({userId})
        if(!companies){
            return res.status(400).json({
                message:"Companies not found.",
                success:false
            })
        }
    } catch (error) {
        console.log(error)
    }
}
//get company by id
export const getCompanyById = async (req,res) => {
    try {
        const companyId = req.params.id;
        const company = await Company.findById(companyId);
        if(!company){
            return res.status(404).json({
                message:"Company not found.",
                success:false
            })
        }
        return res.status(200).json({
            company,
            success:true
        })
    } catch (error) {
        console.log(error)
    }
}

//update company
export const updateCompany = async (req,res)=>{
    try {
        const {name,description,website,location} = req.body;
        const file = req.file;

        // cloudinary here..............

        const updateData = {name,description,website,location};

        const company = await Company.findByIdAndDelete(req.params.id, updateData, {new:true});

        if(!company){
            return res.status(404).json({
                message:"Company not found.",
                success:false
            })
        }
        return res.status(200).json({
            message:"Company Information Updated.",
            success:true
        })
    } catch (error) {
        console.log(error)
    }
}