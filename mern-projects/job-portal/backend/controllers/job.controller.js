import { Job } from "../modals/job.modal.js";

// for admin
export const postJob = async (req,res) => {
    try {
        const { title, description, requirements, salary, location, jobType, experience, position, compantId } = req.body;
        const userId = req.id;
        if (!title || !description || !requirements || !salary || !location || !jobType || !experience || !position || !compantId) {
            return res.status(400).json({
                message: "Something is missing.",
                success: false
            });
        };
        const job = await Job.create({
            title,
            description,
            requirements: requirements.split(","),
            salary: Number(salary),
            location,
            jobType,
            experienceLevel: experience,
            position,
            company: compantId,
            created_by: userId
        });
        return res.status(200).json({
            message: "Job Created Successfully.",
            success: true
        })
    } catch (error) {
        console.log(error);
    }
}

// for student
export const getAllJobs = async (req, res) => {
    try {
        const keyword = req.query.keyword || "";
        const query = {
            $or: [
                { title: { $regex: keyword, $option: "i" } },
                { description: { $regex: keyword, $option: "i" } },
            ]
        };
        const jobs = await Job.find(query);
        if (!jobs) {
            return res.status(404).json({
                message: "Jobs not found.",
                success: false
            })
        };
        return res.status(200).json({
            jobs,
            success: true
        })
    } catch (error) {
        console.log(error)
    }
}

//for student
export const getJobById = async (req,res)=>{
    try {
        const jobId = req.params.id;
        const job = await Job.findById(jobId);
        if(!job){
            return res.status(404).json({
                message:"jobs not found.",
                success:false
            })
        };
        return res.status(200).json({
            job,
            success:true
        })
    } catch (error) {
        console.log(error)
    }
}

// how much jobs admin created till now

export const getAdminJobs = async (req,res)=>{
    try {
        const adminId = req.id;
        const jobs = await Job.find({created_by:adminId});
        if(!job){
            return res.status(404).json({
                message:"jobs not found.",
                success:false
            })
        };
        return res.status(200).json({
            jobs,
            success:true
        })
    } catch (error) {
        console.log(error)
    }
}