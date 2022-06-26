var Executive = require('../model/executive')

exports.createExecutive= async  (req,res) => {
    try {
        if (!req.body){
        }
        
        const personalDetails = {
            Name: req.body.Name,
            Address: req.body.Address,
            PhoneNo: req.body.PhoneNo,
            AadharNo: req.body.AadharNo,
            Email: req.body.Email,
            Occupation: req.body.Occupation
        }

        const executive = new Executive({
            personalDetails : personalDetails,
            Username :  req.body.Username,
            Password : req.body.Password
          
           
        })
    
        await executive.save()
        res.status(200).send(executive)

    }catch(err) {
        res.status(500).send(err)
    }
   
}

exports.addExecutive = async (req,res) =>{
    Executive.updateOne(
     { _id: req.params.id },
     { $addToSet: { personalDetails: req.body.personalDetails } }
    ).then((data)=>{
         res.send(data)
    })
}

exports.GetExecutive = async (req,res)=>{
    Executive.find().then((data)=>{
        res.send(data)
   }).catch(err=> {
    res.status(500).send(err)})
}

exports.DeleteExecutive = (req,res) =>{
    Executive.deleteOne({_id:req.params.id}).then((data)=>{
        res.send(data)
   })
}