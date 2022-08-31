//QuickSort on Linked List

function partionLast(start, end) {
    if(start == end || start == null || end == null)
      return start;

      let piviot_prev = start;
      let curr = start;
      let piviot = end.data;

      while(start != end) {
        if(start.data < piviot) {

            piviot_prev = curr;
            var temp = curr.data;
            curr.data = start.data;
            start.data = temp;
            curr = curr.next;
        }
        start = start.next;
      }

      var temp = curr.data;
      curr.data = piviot;
      end.data = temp;

      return piviot_prev;
}

function sort(start, end) {
    if(start == null || start == end || start == end.next)
      return;

      var piviot_prev = partionLast(start, end);
      sort(start, piviot_prev);

      if(piviot_prev != null && piviot_prev == start)
       sort(piviot_prev.next, end);

       else if(piviot_prev != null && piviot_prev.next != null)
        sort(piviot_prev.next, end);
}
