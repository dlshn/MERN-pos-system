const Customer = require('../model/CustomerSchema');

const saveCustomer = async (req,resp)=>{  // admin, manager
    try{
        const createdCustomer = new Customer(req.body);
        const savedCustomer = await createdCustomer.save();
        resp.status(201).json({message:"customer saved",data:savedCustomer});
    }catch(e){
        resp.status(500).json({error:e.message})
    }
}

const updateCustomer = async (req,resp)=>{  // admin
    try{
        const updatedCustomer = await Customer.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new:true,
            }
        );
        if(updatedCustomer){
            return resp.status(201).json({message:"customer updated",data:updatedCustomer})
        }
        resp.status(404).json({message:"customer not found!"});
    }catch(e){
        resp.status(500).json({error:e.message})
    }
}

const deleteCustomer = async (req,resp)=>{  // admin
    try{
        const deletedCustomer = await Customer.findByIdAndDelete(req.params.id);
        if(deletedCustomer){
            return resp.status(200).json({message:"customer deleted",data:deletedCustomer})
        }
        resp.status(404).json({message:"customer not found!"});
    }catch(e){
        resp.status(500).json({error:e.message})
    }
}

const findCustomer = async (req,resp)=>{  // admin, manager, user
    try{
        const selectedCustomer = await Customer.findById(req.params.id);
        if(selectedCustomer){
            return resp.status(200).json({message:"customer found",data:selectedCustomer})
        }
        resp.status(404).json({message:"customer not found!"});
    }catch(e){
        resp.status(500).json({error:e.message})
    }
}

const loadAllCustomer = async (req,resp)=>{  
    try{
        const {searchText, page=1, size=10}= req.query;
        const filter= searchText?{$or:[
            {customerName:{$regex:searchText,$options:"i"}},
            {address:{$regex:searchText,$options:"i"}},
            {email:{$regex:searchText,$options:"i"}}
        ]}:{};
        const customerList = await Customer.find(filter).skip((page-1)*size).limit(parseInt(size));
        const total = await Customer.countDocuments(filter);
        resp.status(200).json({message:"data list",data:{dataList:customerList,count:total}})
    }catch(e){
        resp.status(500).json({error:e.message})
    }
}

module.exports={
    saveCustomer, updateCustomer, deleteCustomer, findCustomer, loadAllCustomer
};