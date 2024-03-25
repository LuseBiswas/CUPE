import express from 'express';
import { Cupe } from '../Model/CupeModel.js';

const Router = express.Router();

//To save data in DB
Router.post('/', async (req, res) => {
    try {

        if (
            !req.body.CompnayTitle ||
            !req.body.Reviewer ||
            !req.body.CompanyImg_URL ||
            !req.body.PlacementExp ||
            !req.body.CompnayCTC ||
            !req.body.PlacementYear

        ) {
            return res.status(400).send({ Message: "Sorry All feilds are required" });
        }

        const NewCUPE = {
            CompnayTitle: req.body.CompnayTitle,
            Reviewer: req.body.Reviewer,
            CompanyImg_URL: req.body.CompanyImg_URL,
            PlacementExp: req.body.PlacementExp,
            CompnayCTC: req.body.CompnayCTC,
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
        !req.body.CompnayTitle ||
        !req.body.Reviewer ||
        !req.body.CompanyImg_UR ||
        !req.body.PlacementExp ||
        !req.body.CompnayCTC ||
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


export default Router;