<TableContainer style={{ width: 800 }} component={Paper}>
<Table style={{ width: 800 }}>
  <TableHead>
    <TableRow>
      <TableCell align="center">Houses</TableCell>
      <TableCell align="center">Distance</TableCell>
      <TableCell align="center">Duration</TableCell>
    </TableRow>
  </TableHead>

  <TableBody>
    <TableCell align="center" component="th" scope="row">
      {locationNames[0]}
    </TableCell>
    <TableCell align="center" component="th" scope="row">
      {distanceDetails.sort()[0]}
    </TableCell>
    <TableCell align="center" component="th" scope="row">
      {durationDetails.sort()[0]}
    </TableCell>
  </TableBody>

  <TableBody>
    <TableCell align="center" component="th" scope="row">
      {locationNames[1]}
    </TableCell>
    <TableCell align="center" component="th" scope="row">
      {distanceDetails.sort()[1]}
    </TableCell>
    <TableCell align="center" component="th" scope="row">
      {durationDetails.sort()[1]}
    </TableCell>
  </TableBody>

  <TableBody>
    <TableCell align="center" component="th" scope="row">
      {locationNames[2]}
    </TableCell>
    <TableCell align="center" component="th" scope="row">
      {distanceDetails.sort()[2]}
    </TableCell>
    <TableCell align="center" component="th" scope="row">
      {durationDetails.sort()[2]}
    </TableCell>
  </TableBody>

  <TableBody>
    <TableCell align="center" component="th" scope="row">
      {locationNames[3]}
    </TableCell>
    <TableCell align="center" component="th" scope="row">
      {distanceDetails.sort()[3]}
    </TableCell>
    <TableCell align="center" component="th" scope="row">
      {durationDetails.sort()[3]}
    </TableCell>
  </TableBody>

  <TableBody>
    <TableCell align="center" component="th" scope="row">
      {locationNames[4]}
    </TableCell>
    <TableCell align="center" component="th" scope="row">
      {distanceDetails.sort()[4]}
    </TableCell>
    <TableCell align="center" component="th" scope="row">
      {durationDetails.sort()[4]}
    </TableCell>
  </TableBody>

  <TableBody>
    <TableCell align="center" component="th" scope="row">
      {locationNames[5]}
    </TableCell>
    <TableCell align="center" component="th" scope="row">
      {distanceDetails.sort()[5]}
    </TableCell>
    <TableCell align="center" component="th" scope="row">
      {durationDetails.sort()[5]}
    </TableCell>
  </TableBody>

  <TableBody>
    <TableCell align="center" component="th" scope="row">
      {locationNames[6]}
    </TableCell>
    <TableCell align="center" component="th" scope="row">
      {distanceDetails.sort()[6]}
    </TableCell>
    <TableCell align="center" component="th" scope="row">
      {durationDetails.sort()[6]}
    </TableCell>
  </TableBody>

  <TableBody>
    <TableCell align="center" component="th" scope="row">
      {locationNames[7]}
    </TableCell>
    <TableCell align="center" component="th" scope="row">
      {distanceDetails.sort()[7]}
    </TableCell>
    <TableCell align="center" component="th" scope="row">
      {durationDetails.sort()[7]}
    </TableCell>
  </TableBody>

  <TableBody>
    <TableCell align="center" component="th" scope="row">
      {locationNames[8]}
    </TableCell>
    <TableCell align="center" component="th" scope="row">
      {distanceDetails.sort()[8]}
    </TableCell>
    <TableCell align="center" component="th" scope="row">
      {durationDetails.sort()[8]}
    </TableCell>
  </TableBody>

  <TableBody>
    <TableCell align="center" component="th" scope="row">
      {locationNames[9]}
    </TableCell>
    <TableCell align="center" component="th" scope="row">
      {distanceDetails.sort()[9]}
    </TableCell>
    <TableCell align="center" component="th" scope="row">
      {durationDetails.sort()[9]}
    </TableCell>
  </TableBody>
</Table>
</TableContainer>