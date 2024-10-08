import express from 'express';
import { Cupe } from '../Model/CupeModel.js';

const Router = express.Router();

//To save data in DB
Router.post('/', async (req, res) => {
    try {

        if (
            !req.body.CompanyTitle ||
            !req.body.Reviewer ||
            !req.body.CompanyImg_URL ||
            !req.body.PlacementExp ||
            !req.body.CompanyCTC ||
            !req.body.PlacementYear

        ) {
            return res.status(400).send({ Message: "Sorry All feilds are required" });
        }

        const NewCUPE = {
            CompanyTitle: req.body.CompanyTitle,
            Reviewer: req.body.Reviewer,
            CompanyImg_URL: req.body.CompanyImg_URL,
            PlacementExp: req.body.PlacementExp,
            CompanyCTC: req.body.CompanyCTC,
            PlacementYear: req.body.PlacementYear
        }

        const cupe = await Cupe.create(NewCUPE)

        console.log("res", cupe);
        return res.status(201).send(cupe);

    } catch (error) {
        res.status(500).send({ Message: error.Message })
        console.log(error);
    }
});


//To Fetch all the Review from DB
Router.get('/', async (req, res) => {
    try {

        const cupes = await Cupe.find({})

        return res.status(200).json({
            TotalCupes: cupes.length,
            data: cupes,
        });

    } catch (error) {
        res.status(500).send({ Message: error.Message });
        console.log(error);

    }
});


//Get a Single Review from ID
Router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const cupe = await Cupe.findById(id);
        return res.status(200).json(cupe);

    } catch (error) {
        console.log(error);
        res.status(500).send({ Message: error.Message })
    }
});


//Delete a Review by Id from DB
Router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Cupe.findByIdAndDelete(id);
        //if the Reveiw already deleted then
        if (!result) {
            return res.status(404).json({ Message: "Review not Found" })
        }

        return res.status(200).send({ Message: "Review Deletd Successfully" });


    } catch (error) {
        res.status(500).send({ Message: error.Message });
        console.log(error);


    }
})

//Update the Review by its ID
Router.put('/:id', async (req, res) => {

    try {
     if (
        !req.body.CompanyTitle ||
        !req.body.Reviewer ||
        !req.body.CompanyImg_URL ||
        !req.body.PlacementExp ||
        !req.body.CompanyCTC ||
        !req.body.PlacementYear

        ) {
            return res.status(400).send({ Message: "Sorry All feilds are required" });
        }

        //Getting the ID
        const{id} = req.params;
        const result = await Cupe.findByIdAndUpdate(id,req.body);
        if(!result){
        return res.status(404).json({Message:"Review not Found"})
        }

        return res.status(200).json({Message:"Review Updated Successfully"})


    } catch (error) {
        res.status(500).send({ Message: error.Message })
        console.log(error)

    }
})

//Admin Route for All Users

Router.get('/admin/users', async(req,res)=>{
    try{

        const user = await Cupe.find({},{CompanyImg_URL: 0, PlacementExp: 0, PlacementYear: 0, CompanyCTC: 0, CompanyTitle: 0, updatedAt: 0, __v: 0});
        
        if(!user || user.legth == 0){
            return res.status(404).json({message: "No user Found"})
        }
        return res.status(200).json({user});
    }catch(error){
        res.status(500).send({ Message: error.Message })
        console.log(error);
    }
})

export default Router;