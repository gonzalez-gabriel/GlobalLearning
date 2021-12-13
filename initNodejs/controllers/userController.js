// const storeForm = document.getElementById('store-form');
// const storeLastName = document.getElementById('store-lastName');
// const storeAddress = document.getElementById('store-address');
// const storeName = document.getElementById('store-name');

const UsersController = (User) => {

    const getUsers = async (req, res) => {
        const { query } = req;
        const response = await User.find(query);

        res.json(response);
        // const response = await User.find({lastName: 'Ocon'} );
        // res.json(response);
    }
    const postUsers = async (req, res) => {
        const user = new User(req.body);
        await user.save();
        res.json(user);
        // const user = new User({
        //     firstName: storeForm.value,
        //     lastName: storeLastName.value,
        //     userName: storeName.value,
        //     address: storeAddress.value
        // });
        // await user.save();
        // res.json(user);
    }

    const getUserById = async(req, res) => {
        
        const { params } = req;
        const response = await User.findById(params.userId);

        res.json(response);
    }

    const putUsers = async (req, res) => {
        const { body } = req;
        const response = await User.updateOne({
            _id: req.params.userId
        },
        {
            $set:{
                firstName: body.firstName,
                lastName: body.lastName,
                userName: body.userName,
                password: body.password,
                email: body.email,
                address: body.address,
                phone: body.phone
            }
        })
        res.json(response);
    }
    
    const deleteUsers = async (req, res) => {
        const id = req.params.userId;

        await User.findByIdAndDelete(id);

        res.status(202).json('User has been deleted...')
    }
    return { getUsers, postUsers, getUserById, putUsers, deleteUsers };
}
// storeForm.addEventListener('submit', UsersController)
module.exports = UsersController;

