function pangram(s)
{
s=s.toLowerCase();
const alphabets= new Set('abcdefghijklmnopqrstuvwxyz');
for(let char of alphabets)
     {
        if (s.indexOf(char) === -1)
            {
                return false;
            }
     }
return true;
}string= "the quick brown fox jumps over the lazy dog";
console.log(pangram(string));