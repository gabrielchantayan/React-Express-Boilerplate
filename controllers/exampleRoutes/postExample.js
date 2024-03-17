import asyncWrapper from '../../middleware/asyncWrapper.js';
import { postExample as mainFunction } from '../../utils/example/example.js';
import { successHandler as s } from '../../utils/misc/miscUtils.js';

// POST Example
// Example POST Route
const postExample = asyncWrapper(async (req, res) => {

    const ret = await mainFunction(req);

    res.status(200).json({
        success: true,
        data: ret,
    });

});

export default postExample;
