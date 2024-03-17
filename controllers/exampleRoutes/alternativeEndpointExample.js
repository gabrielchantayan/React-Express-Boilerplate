import asyncWrapper from '../../middleware/asyncWrapper.js';
import { getExample as mainFunction } from '../../utils/example/example.js';
import { successHandler as s } from '../../utils/misc/miscUtils.js';

// Alternative Example
// This route uses an alternative endpoint
const alternativeEndpointExample = asyncWrapper(async (req, res) => {

    const ret = await mainFunction(req);

    res.status(200).json({
        success: true,
        data: ret,
    });

});

export default alternativeEndpointExample;
