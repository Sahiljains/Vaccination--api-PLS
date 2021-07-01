import express from 'express';

// Controller
import {getStateInfo } from '../controller/stateContoller.js';
import { getDistrictsInfo } from '../controller/districtController.js';
import { getVaccineSlots } from '../controller/vaccineSlotsController.js';


const router = express.Router();

router.use('/getStates',getStateInfo);
router.get('/getDistricts', getDistrictsInfo);
router.get('/getVaccineSlots', getVaccineSlots);


export default router;