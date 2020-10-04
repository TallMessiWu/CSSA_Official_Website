# fcap = list.files(pattern = "JPG")
# file.rename(fcap, paste0(unlist(strsplit(fcap, ".JPG")), ".jpg"))

fl = c(list.files(pattern = "jpg"), list.files(pattern = "JPG"))
sample(seq(1, length(fl), 1), length(fl), replace = FALSE)

for(f in fl){
  file.rename(f, paste0("IMG_", randlist[n], ".jpg"))
}
