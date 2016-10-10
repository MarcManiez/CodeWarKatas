function nbDig(n, d) {
      var i = 0;
      var result = 0;
      while (i <= n) {
        result += (String(i*i)).split(String(d)).length - 1;
        i++;
      }
      return result;
};
