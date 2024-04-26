import User from "../models/UserModel.js";

export const getLikedMovies = async (req, res) => {
  try {
    const { email } = req.params;
    const user = await await User.findOne({ email });
    if (user) {
      return res.json({ msg: "success", movies: user.likedMovies });
    } else return res.json({ msg: "User with given email not found." });
  } catch (error) {
    return res.json({ msg: "Error fetching movies." });
  }
};

export const addToLikedMovies = async (req, res) => {
  try {
    const { email, data } = req.body;
    const user = await await User.findOne({ email });
    if (user) {
      const { likedMovies } = user;
      const movieAlreadyLiked = likedMovies.find(({ id }) => id === data.id);
      if (!movieAlreadyLiked) {
        await User.findByIdAndUpdate(
          user._id,
          {
            likedMovies: [...user.likedMovies, data],
          },
          { new: true }
        );
      } else return res.json({ msg: "Movie already added to the liked list." });
    } else await User.create({ email, likedMovies: [data] });
    return res.json({ msg: "Movie successfully added to liked list." });
  } catch (error) {
    return res.json({ msg: "Error adding movie to the liked list" });
  }
};

export const removeFromLikedMovies = async (req, res) => {
  try {
    const { email, movieId } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      const movies = user.likedMovies;
      const movieIndex = movies.findIndex(({ id }) => id === movieId);
      if (!movieIndex) {
        res.status(400).send({ msg: "Movie not found." });
      }
      movies.splice(movieIndex, 1);
      await User.findByIdAndUpdate(
        user._id,
        {
          likedMovies: movies,
        },
        { new: true }
      );
      return res.json({ msg: "Movie successfully removed.", movies });
    } else return res.json({ msg: "User with given email not found." });
  } catch (error) {
    return res.json({ msg: "Error removing movie to the liked list" });
  }
};


// export const signup=async(req,res)=>{
//   const {email,password}=req.body;
//   if(!email || !password){
//     return res.status(401).json({message:"Please Enter All Required Field..!!"});
//   }
//   const userexist=await User.findOne({email})

//   if(userexist){
//     return res.status(401).json({message:"User Already Exist..!!"});
//   }
//   const user=await User.create({email,password});
//   return res.status(200).json({message:"User created successfully..!!",user});
// }

// export const login=async(req,res)=>{
//   const {email,password}=req.body;

//   if(!email || !password){
//     return res.status(401).json({message:"Please Enter Email And Password..!!"});
//   }

//   const user=await User.findOne({email})
//   if(!user){
//     return res.status(404).json({message:"User Not Found..!!"});
//   }
//   return res.status(200).json({message:"Logged In Successfully..!",data:user});
// }