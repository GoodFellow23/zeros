module.exports = function zeros(expression) {
  // your solution
  var num1=new Array();
  var num2=new Array();
  let tempArr=[1];
  let result=0;
  strSort(expression,num1,num2);
  firstArr(num1,tempArr);
  secondArr(num2,tempArr);

  for(var i=tempArr.length-1;i>=0;i--)
  {
    if(tempArr[i]!=0)
    {
      result=tempArr.length-1 -i;
      break;
    }
  }  
  return result;
  
}
//Sort string to array factorials
function strSort(expression,num1,num2)
{
  while(true)
  {
    if(expression.indexOf('!')==-1)
    {
      break;
    }
    if(expression[expression.indexOf('!')+1]==='!')
    {
      
      num2.push(parseInt(expression.slice(0,expression.indexOf('!'))));
      expression=expression.slice(expression.indexOf('!')+3);
      
    }
    else if(expression[expression.indexOf('!')+1]==='*' || expression.indexOf('!')==expression.length-1)
    {
      
      num1.push(parseInt(expression.slice(0,expression.indexOf('!'))));
      
      expression=expression.slice(expression.indexOf('!')+2);

    }
   
  }
}
//Array factorials with '!'
function firstArr(num1,tempArr)
{
  for(var i=0;i<num1.length;i++)
  {
    for(var j=1;j<=num1[i];j++)
    {
      let a=tempArr.length-1;
      for(var k=a;k>=0;k--)
      {
        tempArr[k]*=j;
        
      }
      for(var h=a;h>=0;h--)
      {
        while(tempArr[h]>=10)
        {
          if(h==0)
          {
            tempArr.unshift(0);
            h++;
            k--;
          }
          else
          {
            tempArr[h-1]+=1;
            tempArr[h]-=10;
          }
        }
      }
    }
  }
}
//Array factorials with '!!'
function secondArr(num2,tempArr)
{
  for(var i=0;i<num2.length;i++)
  {
    let j=(num2[i]&1) ? 1: 2;
    for(;j<=num2[i];j+=2)
    {
      let a=tempArr.length-1;
      for(var k=a;k>=0;k--)
      {
        tempArr[k]*=j;
        
      }
      for(var h=a;h>=0;h--)
      {
        while(tempArr[h]>=10)
        {
          if(h==0)
          {
            tempArr.unshift(0);
            h++;
            k--;
          }
          else
          {
            tempArr[h-1]+=1;
            tempArr[h]-=10;
          }
        }
      }
    }
  }
}