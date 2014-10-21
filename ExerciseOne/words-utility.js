WordsUtility = function(sentence){
          	
	this.countWords = function(){
		return sentence.split(" ").length;
	}

	this.averageWordLength = function(){
		var words = sentence.split(" ");
			var sameLetter = sentence.indexOf("c");
			for (var i = 0; i>sentence.length; i++)
			{
				sameLetter = words[i];
			}
			
		return sameLetter;

		}

   this.wordsWithTheSameLength = function(){
   	
	}            

 	this.shortestWord = function(){
      var mine = sentence.split(" ");
      var shortestWord = mine[mine.length-1];
      //var mine=sentence.split(" ");
      for(i =0; i < mine.length; i++){
      if(shortestWord.length > mine[i].length){
      shortestWord =mine[i];
        }
    }

    return shortestWord + shortestWord.length;
	}


    this.longestWord  = function(){

   		var mine = sentence.split(" ");
   		var longestWord = "";
   		var mine=sentence.split(" ");
   		for(i =0; i < mine.length; i++){
    		if(longestWord.length < mine[i].length){
      			longestWord = mine[i];
          	}
        }

   		
    	return longestWord + longestWord.length;  
    };

    this.whatLetterDoesTheMostWordsStartWith = function(){
        
    }

    this.whatLetterDoesTheMostWordsEndWith = function(){
    	

    
	
    }

    this.noWordsWithTheSameLength = function(){
     
    }
}
