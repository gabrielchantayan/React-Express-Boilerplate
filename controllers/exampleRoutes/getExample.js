import asyncWrapper from '../../middleware/asyncWrapper.js';
import { getExample as mainFunction } from '../../utils/example/example.js';
import { successHandler as s } from '../../utils/misc/miscUtils.js';

// GET Example
// Example GET Route
const getExample = asyncWrapper(async (req, res) => {

    const ret = await mainFunction(req);

    res.status(200).json({
        success: true,
        data: ret,
    });

});

export default getExample;
